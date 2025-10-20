# TWIN-IOTA: DLT & Identity How To

This guide provides instructions on how to use the TWIN Workbench for identity and asset attestation on the IOTA Distributed Ledger Technology (DLT).

---

## Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Node.js**: Version 16+ is recommended.
- **curl**: For making API calls.
- **base64 and openssl**: For generating SRI hashes.
- **Terminal Access**: A terminal that supports environment variables.

> **Note**: Environment variables (e.g., from `.env` files) must be sourced in each new terminal session using `source ./file.env`.

You will be using an instance of the TWIN Sandbox, known as the **TWIN Workbench**.

---

## How to Obtain a Token

To interact with the TWIN Workbench API, you must first obtain an authentication token. This token is required for all subsequent API calls.

### 1\. Log In to the Correct Sandbox

You can use either of the following sandboxes. For Salus, the `workbench-aws-api` is recommended.

#### TWIN Workbench

```sh
curl --location 'https://workbench-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "czKxK=w5UgAZ}}Lh"
}'
```

#### Salus Recommended Sandbox

```sh
curl --location 'https://workbench-aws-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "MD0$j~!ZURwOT%~6"
}'
```

### 2\. Extract the Token

A successful login will return a `set-cookie` header containing the access token.

```
set-cookie: access_token=eyJhbGciOi...; HttpOnly; SameSite=None; Secure; Path=/
```

To programmatically extract the token, you can use `grep` and `sed`:

```sh
curl -i --location 'https://workbench-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{"email": "admin@node","password": "czKxK=w5UgAZ}}Lh"}' | grep -o 'access_token=[^;]*' | sed 's/access_token=//'
```

Store this token in an environment variable (e.g., `WORKBENCH_TOKEN`) to easily use it in subsequent API calls.

---

## How to Attest an Object

Attestation links a digital object to the DLT. This process uses Subresource Integrity (SRI) and Schema.org vocabulary.

### 1\. Generate SRI Hash

Before you can attest an object, you must generate its SRI hash. For a file named `document.pdf`, run the following command:

```sh
openssl dgst -sha384 -binary document.pdf | openssl base64 -A | xargs -I {} echo "sha384-{}"
```

### 2\. Attest the Document

Once you have the SRI hash and an access token, make the following API call, replacing `YOUR_TOKEN_HERE` and `YOUR_SRI_HASH_HERE` with your actual token and hash.

```sh
curl --location 'https://workbench-api.twindev.org/attestation' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE' \
--data-raw '{
    "attestationObject": {
        "@context": ["https://schema.org", "https://www.w3.org/ns/credentials/v2"],
        "@id": "https://id.example.org/1234567",
        "@type": "DigitalDocument",
        "contentUrl": "https://salus.com/docs/1234567",
        "encodingFormat": "application/pdf",
        "digestSRI": "sha384-YOUR_SRI_HASH_HERE"
    }
}'
```

A successful request will return the attestation ID in the `location` header (e.g., `attestation:nft:...`). You can decode the Base64 portion of this ID to get the NFT ID.

### Troubleshooting Attestation

- A **401 Unauthorized** error indicates an invalid or expired token. Re-authenticate to get a new one.
- Ensure the SRI hash in your request body is correct.

---

## How to Create a DID IOTA Identity

This guide details the manual steps to create a DID IOTA identity. These steps can be automated in the future but are currently manual due to the absence of a gas station.

For more examples, see the [identity-cli documentation](https://github.com/twinfoundation/identity/blob/next/apps/identity-cli/docs/examples.md).

### Step 1: Create a New Wallet

A wallet, consisting of a mnemonic and a seed, is required to manage identities.

```sh
npx "@twin.org/identity-cli@next" mnemonic --env wallet.env
```

This command creates a `wallet.env` file with your `MNEMONIC` and `SEED`.

### Step 2: Generate an Address

Next, generate an address from your wallet's seed.

```sh
# First, load the wallet environment variables
source ./wallet.env

# Generate the address
npx "@twin.org/identity-cli@next" address --load-env wallet.env --seed $SEED --count 2 --env wallet.env --merge-env
```

This will add the new address, private key, and public key to your `wallet.env` file.

### Step 3: Fund the Wallet Address

Your new address must be funded to cover the costs of creating an identity.

#### Configuration

Create a `config.env` file with the appropriate network configuration.

**For Devnet:**
```
NODE_URL="https://api.devnet.iota.cafe"
FAUCET_URL="https://faucet.devnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="devnet"
EXPLORER_URL="https://explorer.iota.org/"
```

**For Testnet:**
```
NODE_URL="https://api.testnet.iota.cafe"
FAUCET_URL="https://faucet.testnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="testnet"
EXPLORER_URL="https://explorer.iota.org/"
```

#### Funding

Load your configuration and fund the address using the faucet.

```sh
# Load environment variables
source ./config.env
source ./wallet.env

# Fund the address
npx "@twin.org/identity-cli@next" faucet --load-env config.env wallet.env --address $ADDRESS_0 --network $NETWORK
```

### Step 4: Create the Identity

Once the address is funded, create the identity.

```sh
npx "@twin.org/identity-cli@next" identity-create --load-env config.env wallet.env --seed $SEED –-address-index 0 --env identity.env
```

This creates an `identity.env` file containing the new DID. This identity is controlled by the funded address and can now be used for operations like NFT transfers.

---

## How to Transfer an NFT

To transfer an attested NFT to a new owner, make a `PUT` request to the attestation endpoint.

```sh
curl --location --request PUT 'https://workbench-api.twindev.org/attestation/YOUR_ATTESTATION_ID/transfer' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE' \
--data '{
    "holderIdentity": "did:iota:...",
    "holderAddress": "0x..."
}'
```

---

## Additional Materials

- **Full OpenAPI Specification**: [View on Swagger Editor](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/twinfoundation/playground/refs/heads/next/apps/playground-node/docs/open-api/spec.json) .