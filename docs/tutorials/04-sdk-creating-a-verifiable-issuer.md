# Tutorial: Creating a Verifiable Issuer Identity (SDK)

This guide is for developers using the **TWIN SDK components** (e.g., `@twin.org/identity-connector-iota`) with a **Hashicorp Vault**-based setup. This is the recommended path for integrating TWIN identity into an existing application backend.

It covers the end-to-end flow:

1. Setting up and initializing the SDK connectors.
2. Creating a verifiable, on-chain DID for your organization.
3. Linking that DID to your public web domain.
4. Linking your new DID to the digital assets (NFTs) you issue.

## Key Concepts: What You Are Building

Before you start, it's important to understand two key concepts:

- **Controller vs. Identity:** Your **wallet (address)**, which is managed by the Vault, is the **Controller**. It's the "key" that proves you own everything. The **Identity** is the public, on-chain **DID Document** you are about to create. It's the "profile" that everyone can see and trust.
- **The Goal:** You will create an **Identity** and then tell your **NFTs**, "This Identity is my official issuer."

---

## Step 1: Setup and Initialization

First, let's set up your environment and initialize the SDK connectors.

### Prerequisites

- **Node.js**: Version 16+ is recommended.
- **Docker**: Required to run Hashicorp Vault locally.
- **Hashicorp Vault**: Ensure you have Vault running (e.g., via Docker) and accessible.

### A. Run Hashicorp Vault (Local Development)

For local development, you typically run Vault using Docker. Ensure your Vault container is running and you know its endpoint URL (e.g., `http://localhost:8200`) and root token.

> **Note**: You also need to enable and configure the 'transit' secrets engine in Vault, which the TWIN SDK uses for key management. The [gleif-poc](https://github.com/gtscio/gleif-poc) repository includes a `vault-init.sh` script demonstrating how to do this.

### B. Install Dependencies

You'll need several key packages from the TWIN SDK.

```bash
npm install @twin.org/identity-connector-iota \
            @twin.org/wallet-connector-iota \
            @twin.org/nft-connector-iota \
            @twin.org/vault-connector-hashicorp \
            @twin.org/vault-models \
            @twin.org/wallet-models
```

### C. Configure Environment Variables

Create a `.env` file for your application with the following variables.

```.env
# Vault Configuration
VAULT_ENDPOINT=http://localhost:8200 # Or your Vault URL
VAULT_TOKEN=root # Your Vault access token

# IOTA Network Configuration
NETWORK=testnet
NODE_URL=https://api.testnet.iota.cafe
FAUCET_URL=https://faucet.testnet.iota.cafe
```

### D. Initialize the Connectors

In your application (e.g., in a `connectors.ts` file), you need to initialize and register the connectors. This code sets up the Vault and configures the IOTA network.

```typescript
import { IotaIdentityConnector } from '@twin.org/identity-connector-iota';
import { IotaWalletConnector, IotaFaucetConnector } from '@twin.org/wallet-connector-iota';
import { IotaNftConnector } from '@twin.org/nft-connector-iota';
import { HashicorpVaultConnector } from '@twin.org/vault-connector-hashicorp';
import { VaultConnectorFactory } from '@twin.org/vault-models';
import { FaucetConnectorFactory, WalletConnectorFactory } from '@twin.org/wallet-models';

// Load environment variables (e.g., using dotenv)
// require('dotenv').config();

// --- 1. Setup Vault Connector (Singleton) ---
const vaultConnector = new HashicorpVaultConnector({
  config: {
    endpoint: process.env.VAULT_ENDPOINT,
    token: process.env.VAULT_TOKEN
  }
});
// Register the vault connector so other components can find it
VaultConnectorFactory.register('vault', () => vaultConnector);

// --- 2. Setup IOTA Network Config ---
const nodeUrl = process.env.NODE_URL;
const faucetUrl = process.env.FAUCET_URL;
const network = process.env.NETWORK;

// --- 3. Create Connector Factory Functions ---
// These functions create new connector instances as needed,
// often using a 'vaultMnemonicId' to map to a user's keys.

export function createIdentityConnector(vaultMnemonicId: string) {
  return new IotaIdentityConnector({
    config: {
      clientOptions: { url: nodeUrl },
      network: network,
      vaultMnemonicId
    }
  });
}

export function createWalletConnector(vaultMnemonicId: string) {
  const wallet = new IotaWalletConnector({
    config: {
      clientOptions: { url: nodeUrl },
      network: network,
      vaultMnemonicId,
      vaultSeedId: 'default-seed' // Use a consistent seed ID per user/identity
    }
  });
  WalletConnectorFactory.register(vaultMnemonicId, () => wallet);
  return wallet;
}

export function createNftConnector(vaultMnemonicId: string) {
  return new IotaNftConnector({
    config: {
      clientOptions: { url: nodeUrl },
      network: network,
      vaultMnemonicId
    },
    walletConnectorType: vaultMnemonicId
  });
}

// ... you might also need a Faucet connector for testnet funding
export function createFaucetConnector() {
  const faucet = new IotaFaucetConnector({
    config: {
      clientOptions: { url: nodeUrl },
      network: network,
      endpoint: faucetUrl
    }
  });
  FaucetConnectorFactory.register('faucet', () => faucet); // Register if needed elsewhere
  return faucet;
}
```

---

## Step 2: Create Your On-Chain Identity and DID

Now that your connectors are ready, you can create an identity for an issuer.

1. **Create a Base Identity:** First, you need a base identity in the system. The `userIdentifier` (e.g., an email or a UUID) is the internal ID you use to map this identity to your Vault keys.

   ```javascript
   // (Assuming you've imported your createIdentityConnector function)
   const userIdentifier = 'issuer@my-organization.com'; // Choose a unique ID
   const identityConnector = createIdentityConnector(userIdentifier);

   // This step creates the identity mapping in the Vault
   await identityConnector.createIdentity(userIdentifier);
   ```

2. **Create the On-Chain DID:** This is the most important step. This command takes your base identity and creates the public, on-chain DID document. The TWIN SDK handles all the complex JSON-LD generation for you.

   ```javascript
   const did = await identityConnector.createDid(
     userIdentifier,
     'My-Organization-DID' // A human-readable name
   );

   console.log('New DID created:', did);
   // Example output: did:iota:test:123...
   ```

3. **Verify Creation:** You can verify it's created and linked to your controller (wallet) by fetching the DID document (using a read-only connector or the same one). It should contain an `owner` field that matches your wallet's address.

---

## Step 3: Link Your DID to Your Public Domain

This step makes your DID verifiable. A user can see your DID and know it's _really_ you because it's linked to your public website (e.g., `your-organization.com`).

This flow uses the **W3C "LinkedDomains"** standard, which requires two parts:

1. **On-Chain Link:** Update your DID document to add a `service` entry that _points to_ your domain.

   ```javascript
   // (Continuing from Step 2, using the same identityConnector instance)
   const domain = 'https://your-organization.com';

   await identityConnector.addService(
     did,
     'LinkedDomains', // The service type
     domain
   );
   ```

2. **Off-Chain Link:** You must host a JSON file on your server at `https://your-organization.com/.well-known/did-configuration.json`. This file _points back_ to your DID, completing the bi-directional link.

   Here is a minimal example for your `did-configuration.json` file:

   ```json
   {
     "linked_dids": [
       "did:iota:test:123..." // Replace with your actual DID
     ]
   }
   ```

A verifier will check _both_ places: they check the DID for the link to the domain, then check the domain for the file linking back to the DID.

---

## Step 4: Link Your Identity to Your Digital Assets (NFTs)

This connects your new, verifiable identity to the assets you create.

- **The Immediate Step:** When you mint an NFT (using your `createNftConnector`), take the DID you created in Step 2 (e.g., `did:iota:test:123...`) and **add it to the NFT's immutable metadata `issuer` field**. This is the "watermark" that proves your new identity created that asset.

- **The "True North" (Future Goal):** Our long-term plan is to have the **Identity itself be the minter** of the NFT. This is a more powerful, fully on-chain link. This will require future updates (RFCs) to the TWIN components. For now, **using the `issuer` field is the correct approach.**

---

## Advanced Concepts & Next Steps

- **`LinkedDomains` vs. `alsoKnownAs`:** The method in Step 3 (`LinkedDomains`) is for **off-chain** verifiers (like a website frontend). In our "True North" roadmap, we are exploring the `alsoKnownAs` property, which creates a fully **on-chain** link that smart contracts can read. For now, `LinkedDomains` is the standard to use.

- **Issuing Credentials (`createAttestation`):** Now that you have a trusted identity, you can issue Verifiable Credentials (VCs). This is for making specific, verifiable claims (e.g., "This asset was verified by Inspector X"). You can use the `createAttestation` method from the `identityConnector` for this.
