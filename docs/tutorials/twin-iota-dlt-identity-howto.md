# TWIN-IOTA: DLT & Identity How To

This guide provides instructions on how to use the TWIN Workbench for identity and asset attestation on the IOTA Distributed Ledger Technology (DLT).

-----

## Prerequisites

Before you begin, ensure you have the following installed and configured:

* **Node.js**: Version 16+ is recommended.
* **curl**: For making API calls.
* **base64 and openssl**: For generating SRI hashes.
* **Terminal Access**: A terminal that supports environment variables.

> **Note**: Environment variables (e.g., from `.env` files) must be sourced in each new terminal session using `source ./file.env`.

You will be using an instance of the TWIN Sandbox, known as the **TWIN Workbench**.

-----

## How to Obtain a Token

First, you need to authenticate with the API to get an access token. The token is returned in the `set-cookie` header of the response.

**Standard Workbench API Call:**

```sh
curl -i --location 'https://workbench-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "czKxK=w5UgAZ}}Lh"
}'
```



**Salus-Recommended Sandbox API Call:**

```sh
curl -i --location 'https://workbench-aws-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "MD0$j~!ZURwOT%~6"
}'
```



After running the command, extract the `access_token` from the `set-cookie` header for use in subsequent requests.

### Troubleshooting Token Acquisition

* If you don't see a token, make sure your `curl` command includes the `-i` flag to show response headers.
* Tokens expire, so you may need to re-authenticate to get a new one.

-----

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

* A **401 Unauthorized** error indicates an invalid or expired token. Re-authenticate to get a new one.
* Ensure the SRI hash in your request body is correct.

-----

## How to Create a DID IOTA Identity

These steps describe the manual process for creating a Decentralized Identifier (DID) on the IOTA network. Future versions will include API automation.

### Step 1: Create a New Wallet

This command generates a mnemonic and a seed, saving them to a **`wallet.env`** file.

```sh
npx "@twin.org/identity-cli@next" mnemonic --env wallet.env
```



### Step 2: Generate Wallet Addresses

Use the mnemonic and seed from the previous step to generate wallet addresses. This command adds `ADDRESS_0`, `ADDRESS_1`, etc., to your **`wallet.env`** file.

```sh
source ./wallet.env
npx "@twin.org/identity-cli@next" address --load-env wallet.env --seed $SEED --count 2 --env wallet.env --merge-env
```



### Step 3: Fund the First Address

You need to fund your primary wallet address using a faucet. First, create a **`config.env`** file for the IOTA testnet.

```sh
cat > config.env << EOF
NODE_URL="https://api.testnet.iota.cafe"
FAUCET_URL="https://faucet.testnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="testnet"
EXPLORER_URL="https://explorer.iota.org/"
EOF
```



Next, source your environment files and run the faucet command:

```sh
source ./config.env
source ./wallet.env
npx "@twin.org/identity-cli@next" faucet --load-env config.env wallet.env --address $ADDRESS_0 --network $NETWORK
```



You can verify the transaction using the explorer link provided in the command's output.

### Step 4: Create the Identity

Now, create the DID. This command will generate an **`identity.env`** file containing the new DID.

```sh
source ./config.env
source ./wallet.env
npx "@twin.org/identity-cli@next" identity-create --load-env config.env wallet.env --seed $SEED --address-index 0 --env identity.env
```



### Step 5: Add a Verification Method (Optional)

This step adds a cryptographic key to your DID, which can be used for signing and verifying credentials.

```sh
source ./identity.env
npx "@twin.org/identity-cli@next" verification-method-add --load-env config.env wallet.env identity.env --seed '!SEED' --did '!DID' --type verificationMethod --env verification-method.env
```



-----

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



-----

## Additional Materials

* **Full OpenAPI Specification**: [View on Swagger Editor](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/twinfoundation/workbench/refs/heads/next/apps/workbench-server/docs/open-api/spec.json) .
* **More Examples**: See the [TWIN Foundation Gist](https://gist.github.com/sadick254/92a76349ef8741391e4bf044aed0ad2d) for more information.
