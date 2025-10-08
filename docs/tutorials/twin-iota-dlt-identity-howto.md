# TWIN-IOTA: DLT & Identity How To

This tutorial explains how to get a token, attest an object, and create a DID IOTA Identity.

See also [this gist](https://gist.github.com/sadick254/92a76349ef8741391e4bf044aed0ad2d).

## How to obtain a token

You will be using an instance of the TWIN Sandbox, named TWIN Workbench.

```bash
curl --location 'https://workbench-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "czKxK=w5UgAZ}}Lh"
}'
```

Alternatively this other sandbox can also be used by Salus (recommended):

```bash
curl --location 'https://workbench-aws-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@node",
    "password": "MD0$j~!ZURwOT%~6"
}'
```

The token will be available under a `set-cookie` header such as:

```
set-cookie: access_token=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6aW90YTplNjc4MTIzYToweDIxZjNmOGZlOTY2MDFlYThhYTRjZDA0N2IyMThjYTRhZjdhM2FjZGFlMDcyZTVmY2FhNWQzNWRkNWYyZDE0NmUiLCJleHAiOjE3NDk2NDM1ODR9.GwoRQmCZh6pc1lhSAlYn21iFpwtgAXu6HSbWR_08e9EuftvzckL-U2tYMqTBkk_NAZkuaXzDxmmbACInb2-QAw; HttpOnly; SameSite=None; Secure; Path=/
```

To extract just the token value programmatically in a script, you can pipe the output to a tool like `grep` and `sed`:

```bash
curl -i --location 'https://workbench-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{"email": "admin@node","password": "czKxK=w5UgAZ}}Lh"}' | grep -o 'access_token=[^;]*' | sed 's/access_token=//'
```

## How to Attest an Object

Once you have a token you can do:

```bash
curl --location 'https://workbench-api.twindev.org/attestation' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6aW90YTplNjc4MTIzYToweDIxZjNmOGZlOTY2MDFlYThhYTRjZDA0N2IyMThjYTRhZjdhM2FjZGFlMDcyZTVmY2FhNWQzNWRkNWYyZDE0NmUiLCJleHAiOjE3NDk2NDM1ODR9.GwoRQmCZh6pc1lhSAlYn21iFpwtgAXu6HSbWR_08e9EuftvzckL-U2tYMqTBkk_NAZkuaXzDxmmbACInb2-QAw' \
--data-raw '{
    "attestationObject": {
        "@context": ["https://schema.org", "https://www.w3.org/ns/credentials/v2"],
        "@id": "https://id.example.org/1234567",
        "@type": "DigitalDocument",
        "contentUrl": "https://salus.com/docs/1234567",
        "encodingFormat": "application/pdf",
        "digestSRI": "sha384-Ml/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU"
    }
}'
```

The example above is using the [Subresource integrity](https://www.w3.org/TR/sri-2/) specification for the documents fingerprint which we would recommend together with the Schema.org Vocabulary.

After the call above succeeds then you will get an attestation id at the `location` header. For instance:

`attestation:nft:bmZ0OmlvdGE6ZGV2bmV0OjB4NmQ0NmM3MDczYWM5NjAxMzAzYTAxMGY4NzE4MDE5NGVhMzdiMjQxYmFmZmU2MzQ1NjE2ZmNkYmNhODdkNzFlYzoweDUzYzA4NTE3NzgzZDk1NWU3NjUyOTkwOGE5NWQwZGQ3ZTIyN2U3ZDYwYzI2YWVkMmI4ZmU2ZWI3ZjUzZjdlMjQ=`

If you take the last part i.e. `bmZ0OmlvdGE6ZGV2bmV0OjB4NmQ0NmM3MDczYWM5NjAxMzAzYTAxMGY4NzE4MDE5NGVhMzdiMjQxYmFmZmU2MzQ1NjE2ZmNkYmNhODdkNzFlYzoweDUzYzA4NTE3NzgzZDk1NWU3NjUyOTkwOGE5NWQwZGQ3ZTIyN2U3ZDYwYzI2YWVkMmI4ZmU2ZWI3ZjUzZjdlMjQ=` and decode it using Base64 decoder such as https://www.base64decode.org/ you will get something like:

`nft:iota:devnet:0x6d46c7073ac9601303a010f87180194ea37b241baffe6345616fcdbca87d71ec:0x53c08517783d955e76529908a95d0dd7e227e7d60c26aed2b8fe6eb7f53f7e24`

The last part is the NFT Id, Object Id in the IOTA network, in this case the devnet. See for instance, https://explorer.iota.org/object/0x53c08517783d955e76529908a95d0dd7e227e7d60c26aed2b8fe6eb7f53f7e24?network=devnet

The same can be done on the testnet.

## How to create a DID IOTA Identity

See some documentation details at [identity/apps/identity-cli/docs/examples.md](https://github.com/twinfoundation/identity/blob/next/apps/identity-cli/docs/examples.md).

The steps detailed here are manual but in the future they can be automated through APIs. However as there is still no gas station deployed or being used with TWIN we recommend Salus to create manually identities on the devnet and then associate them with their stakeholders at the level of the Salus platform.

### Step 1: Create a new wallet (a mnemonic with a seed)

```bash
npx "@twin.org/identity-cli@next" mnemonic --env wallet.env
```

As a result a new `wallet.env` file will be created with the mnemonic and the seed for this new Wallet. Example:

```
MNEMONIC="spice layer little lesson wish vendor pull advice wreck satoshi black grit dawn exchange gospel engine style lecture unknown impulse stool ridge common peace"
SEED="0x2b7ec2eb9dccf94028710a1e953cbebf26e3b8c732253801c4671aaad617bcf1929110d0cceb5ae7f0333468aca3abd6e7941cf4833f14369d3b0bdee5fc21c9"
```

### Step 2: Address generation using the mnemonic and seed

After loading the `wallet.env` in the current environment, execute the following command. You can use `source ./wallet.env` to load the variables.

```bash
npx "@twin.org/identity-cli@next" address --load-env wallet.env --seed $SEED --count 2 --env wallet.env --merge-env
```

As a result the new content of the `wallet.env` will be:

```
ADDRESS_0="0x51b3f02577f18e15345d5833015e4a5e5021f40ab2075ed984f59cfa0be6cce8"
ADDRESS_0_PRIVATE_KEY="0x09dd90ae36960fb029f0e00b2ecada5c91161ad5da5515e78867ec94c136f5db"
ADDRESS_0_PUBLIC_KEY="0x38f0fa5778a193d1977c88931c9e036c8890e2771df6178cae96ebf3c3a4ec77"
ADDRESS_1="0xb91d2e85ca147bd91b2a61db936eef2fec61c98fa1fd55d1fc676b35bf30382a"
ADDRESS_1_PRIVATE_KEY="0x1ec3046879a170ddea6f9b65d984240a2beb6b616397fc3e1535893d04314452"
ADDRESS_1_PUBLIC_KEY="0x430c1d45fee31c8c38dcbea1d74d64596a951aa03149a6328736d00742229d14"
```

### Step 3: Fund the first wallet address using a faucet

First reload `wallet.env` in the current env. Then, create configuration for the devnet (save it as `config.env`) and then load in the current env:

**Devnet Configuration**
```
NODE_URL="https://api.devnet.iota.cafe"
FAUCET_URL="https://faucet.devnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="devnet"
EXPLORER_URL="https://explorer.iota.org/"
```

**Testnet Configuration**
```
NODE_URL="https://api.testnet.iota.cafe"
FAUCET_URL="https://faucet.testnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="testnet"
EXPLORER_URL="https://explorer.iota.org/"
```

Fund the wallet address:

```bash
npx "@twin.org/identity-cli@next" faucet --load-env config.env wallet.env --address $ADDRESS_0 --network $NETWORK
```

If everything goes fine then the address 0 will be funded so that it can become the controller of a new Identity.

### Step 4: Create Identity

```bash
npx "@twin.org/identity-cli@next" identity-create --load-env config.env wallet.env --seed $SEED –-address-index 0 --env identity.env
```

Finally a new Identity will be created. That identity will be controlled by address #0 of our master key. That identity is the one that must be used to transfer the NFT to together with address #0.

### Step 5: Add a verification method (optional for Salus)

```bash
npx "@twin.org/identity-cli@next" verification-method-add --load-env config.env wallet.env identity.env --seed '!SEED' --did '!DID' --type verificationMethod --env verification-method.env
```

## How to Transfer NFT

The NFT now can be transferred to another account, for example as follows:

```bash
curl --location --request PUT 'https://workbench-api.twindev.org/attestation/attestation:nft:bmZ0OmlvdGE6ZGV2bmV0OjB4NmQ0NmM3MDczYWM5NjAxMzAzYTAxMGY4NzE4MDE5NGVhMzdiMjQxYmFmZmU2MzQ1NjE2ZmNkYmNhODdkNzFlYzoweDUzYzA4NTE3NzgzZDk1NWU3NjUyOTkwOGE5NWQwZGQ3ZTIyN2U3ZDYwYzI2YWVkMmI4ZmU2ZWI3ZjUzZjdlMjQ=/transfer' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6aW90YTplNjc4MTIzYToweDIxZjNmOGZlOTY2MDFlYThhYTRjZDA0N2IyMThjYTRhZjdhM2FjZGFlMDcyZTVmY2FhNWQzNWRkNWYyZDE0NmUiLCJleHAiOjE3NDk2NTYzNjN9.n-L2QjIU2Xb7kk2TGIWLCLJXWr_D0CLfzPKQs0g2p_AKVItrNp0uVFIoZSG_YFaCEWD-vn4njA1T9oM0_y66Cg' \
--data '{
    "holderIdentity": "did:iota:e678123a:0x0f70d85dfb612b105915506182222a8998c4fffde04db115c46298de4adce118",
    "holderAddress": "0x088bee8e9a4e79e762b4072db3d80fb53bc9e2eaa7a7f6c50334bffd660484e6"
}'
```

If everything goes fine the initial NFT will be transferred to the new Address.

## Misc info that could be useful

### How to Create Addresses in the IOTA network

#### With the IOTA CLI tool

See the [IOTA CLI documentation](https://docs.iota.org/references/cli).

Examples:

After installing the iota CLI you can run this command:

```bash
iota keytool generate ed25519
```

And also you can run `iota help` and see all of the options you can use the CLI for.

```bash
# Generate new address with ed25519 (default)
iota keytool generate ed25519
# Generate with different key schemes
iota keytool generate secp256k1
iota keytool generate secp256r1
# Generate with custom word length for mnemonic
iota keytool generate ed25519 --word-length word24
# Generate new address in your wallet
iota client new-address
# List all addresses in your wallet
iota keytool list
```

#### With the TWIN Crypto Tool

See [TWIN Crypto Tool examples](https://github.com/twinfoundation/framework/blob/6fba534587bf17cc6c330dd4df880822f448c01e/apps/crypto-cli/docs/examples.md).

#### Using IOTA Libraries

See example: [dlt-iota/src/iota.ts](https://github.com/twinfoundation/dlt/blob/6ada20b1d4eaffa95cdef78d10c7d46e94d20012/packages/dlt-iota/src/iota.ts#L90).

### How to Fund Addresses

#### With the TWIN Wallet CLI

See [TWIN Wallet CLI examples](https://github.com/twinfoundation/wallet/blob/b4b2d1b63a45cb3e6a8cd87b6369bd8e81e36f4f/apps/wallet-cli/docs/examples.md).

## Additional materials

Full Open API Spec: [Swagger Editor](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/twinfoundation/workbench/refs/heads/next/apps/workbench-server/docs/open-api/spec.json)