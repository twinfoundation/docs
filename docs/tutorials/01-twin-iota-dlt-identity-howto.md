---
id: twin-iota-dlt-identity-howto
---

# TWIN-IOTA: DLT & Identity How To

This guide provides instructions on how to use the TWIN Playground for identity and asset attestation on the IOTA Distributed Ledger Technology (DLT).

---

## Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Node.js**: Version 16+ is recommended.
- **curl**: For making API calls.
- **base64 and openssl**: For generating SRI hashes.
- **Terminal Access**: A terminal that supports environment variables.

> **Note**: Environment variables (e.g., from `.env` files) must be sourced in each new terminal session using `source ./file.env`.

You will be using an instance of the TWIN Sandbox, known as the **TWIN Playground**.

---

## How to Obtain a Token

See [How to Obtain a Token](02-twin-iota-dlt-obtain-token.md) for detailed instructions.

## How to Attest an Object

Attestation links a digital object to the DLT. This process uses Subresource Integrity (SRI) and Schema.org vocabulary.

### 1. Generate SRI Hash

Before you can attest an object, you must generate its SRI hash. For a file named `document.pdf`, run the following command:

```sh
openssl dgst -sha384 -binary document.pdf | openssl base64 -A | xargs -I {} echo "sha384-{}"
```

### 2. Attest the Document

Once you have the SRI hash and an access token, make the following API call, replacing `YOUR_TOKEN_HERE` and `YOUR_SRI_HASH_HERE` with your actual token and hash.

```sh
curl --location 'https://playground-api.twindev.org/attestation' \
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

See [How to Create a DID IOTA Identity](03-twin-iota-dlt-create-did-identity.md) for detailed instructions.

## How to Transfer an NFT

To transfer an attested NFT to a new owner, make a `PUT` request to the attestation endpoint.

```sh
curl --location --request PUT 'https://playground-api.twindev.org/attestation/YOUR_ATTESTATION_ID/transfer' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE' \
--data-raw '{
    "holderIdentity": "did:iota:...",
    "holderAddress": "0x..."
}'
```

---

## Additional Materials

- **Full OpenAPI Specification**: [View on Swagger Editor](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/twinfoundation/playground/refs/heads/next/apps/playground-node/docs/open-api/spec.json).
