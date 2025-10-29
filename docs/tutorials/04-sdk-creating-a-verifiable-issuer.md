---
id: sdk-creating-a-verifiable-issuer
---

# How to Create a Verifiable Issuer Identity with the TWIN SDK

This guide explains the correct, multi-step process for creating a new digital identity, publishing an on-chain DID document, and issuing Verifiable Credentials using the TWIN SDK.

The most important concept is that you must first create a **Wallet Identity** (a "controller") which is stored securely in a vault. You then use that identity to control an **Identity Connector** which performs the public, on-chain operations.

## Prerequisites

- Node.js 18+ and npm
- Access to an IOTA network endpoint and faucet (defaults target testnet):
  - `IDENTITY_IOTA_NETWORK` (e.g., `testnet`)
  - `IDENTITY_IOTA_NODE_ENDPOINT` (e.g., `https://api.testnet.iota.cafe`)
  - `IDENTITY_IOTA_FAUCET_ENDPOINT` (e.g., `https://faucet.testnet.iota.cafe`)
- A Hashicorp Vault instance reachable by your code:

  - Set `VAULT_ENDPOINT` and `VAULT_TOKEN`
  - Local testing with Docker (no prior setup assumed):

    ```bash
    docker run -d --name vault-dev -p 8200:8200 \
      -e VAULT_DEV_ROOT_TOKEN_ID=root hashicorp/vault server -dev
    export VAULT_ENDPOINT=http://127.0.0.1:8200
    export VAULT_TOKEN=root
    ```

  The TWIN Hashicorp Vault connector uses the token to store and retrieve secrets; no additional Vault configuration is required for this tutorial.

## Step 1: Configure Connectors

First, you must import and register the necessary connectors. This example uses the IOTA SDKs and a Hashicorp Vault.

1. **Import SDK packages:**

   ```javascript
   import { IotaIdentityConnector } from '@twin.org/identity-connector-iota';
   import { IotaWalletConnector, IotaFaucetConnector } from '@twin.org/wallet-connector-iota';
   import { HashicorpVaultConnector } from '@twin.org/vault-connector-hashicorp';
   import { VaultConnectorFactory } from '@twin.org/vault-models';
   import { WalletConnectorFactory, FaucetConnectorFactory } from '@twin.org/wallet-models';
   import { DidVerificationMethodType } from '@twin.org/standards-w3c-did';
   ```

2. **Initialize and Register the Vault:** The vault stores your private keys.

   ```javascript
   const vaultConnector = new HashicorpVaultConnector({
     config: {
       endpoint: process.env.VAULT_ENDPOINT || 'http://localhost:8200',
       token: process.env.VAULT_TOKEN || 'root'
     }
   });

   // Register the vault so other connectors can find it
   VaultConnectorFactory.register('vault', () => vaultConnector);
   ```

3. **Define Connector Configuration:** Set up the network parameters.

   ```javascript
   const nodeUrl = process.env.IDENTITY_IOTA_NODE_ENDPOINT || 'https://api.testnet.iota.cafe';
   const network = process.env.IDENTITY_IOTA_NETWORK || 'testnet';
   const faucetUrl =
     process.env.IDENTITY_IOTA_FAUCET_ENDPOINT || 'https://faucet.testnet.iota.cafe';
   ```

---

## Step 2: Create a Wallet Identity (The Controller)

You do not create a DID directly. You first create a secure "controller" identity in the vault. This controller will own and manage your public DID. Treat the controller as a vault key identifier — do not extract or pass mnemonics around.

1. **Define a unique ID** for your new identity in the vault.

   ```javascript
   const userIdentifier = 'my-new-organization-controller';
   ```

2. **Create a Wallet Connector** instance for this ID.

   ```javascript
   const walletConnector = new IotaWalletConnector({
     config: {
       clientOptions: {
         url: nodeUrl
       },
       network: network,
       vaultMnemonicId: userIdentifier,
       // The vaultSeedId is an identifier for the seed within the vault.
       // For this tutorial, a static ID is sufficient; in production, choose a stable per-issuer value.
       vaultSeedId: 'test-seed'
     }
   });

   // Register this specific wallet instance
   WalletConnectorFactory.register(userIdentifier, () => walletConnector);
   ```

3. **Create the wallet record in the vault** to generate and securely store a new mnemonic seed under your identifier.

   ```javascript
   // This stores the mnemonic in the vault under your identifier
   await walletConnector.create(userIdentifier);

   // Use the identifier as your controller identity reference
   const controllerIdentity = userIdentifier;

   console.log('New controller identity created and stored in vault (by ID).');
   ```

---

## Step 3: Create the On-Chain DID Document

Now that you have a `controllerIdentity`, you can use it to create and publish your public DID document to the IOTA Tangle.

1. **Create an Identity Connector** that is _controlled by_ the identity you just created. Pass the controller identity (vault ID) as `vaultMnemonicId`.

   ```javascript
   const identityConnector = new IotaIdentityConnector({
     config: {
       clientOptions: {
         url: nodeUrl
       },
       network: network,
       vaultMnemonicId: controllerIdentity // Use the vault-stored controller ID
     }
   });
   ```

2. **Fund the controller wallet (testnet)** so the DID operation can be published.

   ```javascript
   // Optional: register a faucet connector (if your app uses factories)
   const faucetConnector = new IotaFaucetConnector({
     config: {
       clientOptions: { url: nodeUrl },
       network,
       endpoint: faucetUrl
     }
   });
   FaucetConnectorFactory.register('faucet', () => faucetConnector);

   // Derive an address to fund (account index 0, start index 0, count 1)
   const addresses = await walletConnector.getAddresses(controllerIdentity, 0, 0, 1);
   const address = addresses[0];

   // Fund with faucet tokens (amount is in the connector’s unit for testnet)
   await faucetConnector.fundAddress(controllerIdentity, address, 100);
   ```

3. **Create the DID and add a verification method.** The controller signs these transactions.

   ```javascript
   // Create the public DID document
   const document = await identityConnector.createDocument(controllerIdentity);
   const did = document.id;

   // Add a default verification method to sign credentials later
   const vm = await identityConnector.addVerificationMethod(
     controllerIdentity,
     did,
     DidVerificationMethodType.AssertionMethod,
     'key-1'
   );
   const defaultVerificationMethodId = typeof vm === 'string' ? vm : vm?.id;

   console.log('DID Document created successfully!');
   console.log('DID:', did);
   console.log('Verification Method ID:', defaultVerificationMethodId);
   ```

---

## Step 4: Update the DID (e.g., Add a Service)

Once the DID exists, you can use its controller to add new services, such as linking it to a domain.

1. **Define your service** parameters.

   ```javascript
   const domainOrigin = 'https://my-organization.com';
   const serviceId = 'linked-domain'; // A unique ID for this service
   const serviceType = 'LinkedDomains';
   ```

2. **Call `identityConnector.addService()`** using the full, correct signature.

   ```javascript
   await identityConnector.addService(
     controllerIdentity, // The controller signing the update
     did, // The DID document to update
     serviceId, // The unique ID for the new service
     serviceType, // The type of service
     domainOrigin // The service endpoint
   );

   console.log('LinkedDomains service added to DID document.');
   ```

---

## Step 5: Issue a Verifiable Credential (VC)

Finally, your new DID can act as an issuer and create Verifiable Credentials.

1. **Define the credential** subject.

   ```javascript
   const credentialSubject = {
     id: did, // The DID being linked to the domain
     origin: domainOrigin
   };
   ```

2. **Call `identityConnector.createVerifiableCredential()`** with the correct signature and subject shape to sign and issue the VC.

   ```javascript
   // Build a full subject with context and type
   const subject = {
     '@context': [
       'https://www.w3.org/2018/credentials/v1',
       'https://identity.foundation/.well-known/did-configuration/v1'
     ],
     type: ['VerifiableCredential', 'DomainLinkageCredential'],
     credentialSubject
   };

   // Issue the VC (note parameter order)
   const { verifiableCredential, jwt } = await identityConnector.createVerifiableCredential(
     controllerIdentity, // The controller (issuer)
     defaultVerificationMethodId, // The specific key to sign with
     undefined, // Optional credential ID
     subject // The credential payload
   );

   console.log('Verifiable Credential issued successfully!');
   console.log('JWT:', jwt);
   ```

---

## Verify the Setup

Use the read-only identity resolver to fetch the on-chain DID document and validate the LinkedDomains configuration.

1. Resolve the DID and inspect services.

   ```javascript
   import { IotaIdentityResolverConnector } from '@twin.org/identity-connector-iota';

   const resolver = new IotaIdentityResolverConnector({
     config: { clientOptions: { url: nodeUrl }, network }
   });

   const didDoc = await resolver.resolveDocument(did);
   const services = Array.isArray(didDoc.service) ? didDoc.service : [];
   const linked = services.find((s) => {
     const types = Array.isArray(s?.type) ? s.type : [s?.type];
     return types.includes('LinkedDomains');
   });
   console.log('LinkedDomains service:', linked);
   ```

2. Fetch and verify the domain configuration JWT.

   ```javascript
   const origin = Array.isArray(linked?.serviceEndpoint)
     ? linked.serviceEndpoint[0]
     : linked?.serviceEndpoint;
   const normalized = origin.replace(/\/$/, '');
   const configRes = await fetch(`${normalized}/.well-known/did-configuration.json`);
   const { linked_dids } = await configRes.json();
   const jwt = linked_dids?.[0];

   // Reuse the identity connector to verify the JWT credential
   const { verifiableCredential } = await identityConnector.checkVerifiableCredential(jwt);

   // Validate issuer/subject and origin
   const cred = verifiableCredential;
   const issuerDid = cred.issuer;
   // For this tutorial (DomainLinkageCredential), the subject is a single object
   const subject = Array.isArray(cred.credentialSubject)
     ? cred.credentialSubject[0]
     : cred.credentialSubject;

   if (issuerDid !== did || subject?.id !== did)
     throw new Error('DID mismatch in domain linkage credential');
   if (subject?.origin !== normalized)
     throw new Error('Origin mismatch in domain linkage credential');
   console.log('Domain linkage verified for', did, '→', normalized);
   ```

Notes

- Service ID (`linked-domain`) can be any stable string; verification relies on the `type: LinkedDomains` and endpoint value.
- On testnet, ensure the controller wallet is funded before creating or updating a DID.
- In production, credential structures may vary (arrays, nested objects). This example is simplified for the DomainLinkageCredential produced above.
