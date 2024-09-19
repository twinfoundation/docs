# @twin.org/attestation-cli - Examples

## Command Line Tool

First install the tool with the following script.

```shell
npm install @twin.org/attestation-cli
```

Running the tool with no commands will provide help for all the commands. By issuing the following command you should see the result.

```shell
twin-attestation
```

Output

```shell
🌍 TWIN Attestation v1.0.0

Usage: twin-attestation [command]

Options:
  -V, --version                             output the version number
  --lang <lang>                             The language to display the output in. (default: "en")
  --load-env [env...]                       Load the env files to initialise any environment variables.
  -h, --help                                display help for command

Commands:
  mnemonic [options]                        Create a mnemonic.
  address [options]                         Create bech32 addresses and keys from the seed.
  faucet [options]                          Request funds from the faucet.
  identity-create [options]                 Create a Decentralized Identifier (DID).
  identity-resolve [options]                Resolve a Decentralized Identifier (DID).
  verification-method-add [options]         Add a verification method to a DID.
  verification-method-remove [options]      Remove a verification method from a DID.
  verifiable-credential-create [options]    Create a verifiable credential.
  verifiable-credential-verify [options]    Verify a verifiable credential.
  verifiable-credential-revoke [options]    Revoke a verifiable credential.
  verifiable-credential-unrevoke [options]  Unrevoke a verifiable credential.
  attestation-attest [options]              Create an attestation.
  attestation-verify [options]              Verify an attestation.
  attestation-transfer [options]            Transfer an attestation to a new holder.
```

You can get further details on the sub commands by using the help option for the individual commands.

```shell
twin-attestation attestation-attest --help
```

Output

```shell
🌍 TWIN Attestation v1.0.0

Usage: twin-attestation attestation-attest [options]

Create an attestation.

Options:
  --seed <seed>                                      The seed for the owner address in hex or base64 used to fund the attested storage, or start with ! to read environment variable.
  --owner <owner>                                    The bech32 address of the attestation owner, or start with ! to read environment variable.
  --verification-method-id <verification-method-id>  The full verification method id including did, or start with ! to read environment variable.
  --private-key <private-key>                        The private key for the verification method id, in either hex or base64 form, or start with ! to read environment variable.
  --data-json <data-json>                            A JSON file to read which includes the data for attestation.
  --no-console                                       Hides the output in the console.
  --json <filename>                                  Creates a JSON file containing the output.
  --merge-json                                       If the JSON file already exists merge the data instead of overwriting.
  --env <filename>                                   Creates an env file containing the output.
  --merge-env                                        If the env file already exists merge the data instead of overwriting.
  --node <url>                                       The url for the node endpoint, or an environment variable name containing the url. (default: "!NODE_URL")
  --explorer <url>                                   The url for the explorer endpoint, or an environment variable name containing the url. (default: "!EXPLORER_URL")
```

The commands `mnemonic`, `address`, `faucet`, `identity*` and `verifiable-credential*` are described in more detail in the examples for `crypto-cli`, `wallet-cli` and `identity-cli`.

## Command

### attestation-attest

Use this command to attest some data, the owner address must have sufficient funds to store the data. The seed and the funds can be generated using the `mnemonic` and `faucet` commands. You must also have an identity with a verification method used to generate the verifiable credential for the attestation.

```shell
# Generate a seed and mnemonic and store it in the env file
twin-attestation mnemonic --env wallet.env

# Generate an address and store it in the env file
twin-attestation address --load-env wallet.env --hrp tst --seed !SEED --count 4 --env wallet.env --merge-env

# Add some funds to the address generated in the previous step
twin-attestation faucet --load-env config.env --address !ADDRESS_0_BECH32

# Create an identity to own the attestation
twin-attestation identity-create --load-env config.env wallet.env --seed !SEED --controller !ADDRESS_0_BECH32 --env identity.env

# Add a verification method to the identity
twin-attestation verification-method-add --load-env config.env wallet.env identity.env --seed !SEED --did !DID --type verificationMethod --id attestation --env verification-method.env

```

To run this on the IOTA testnet you will need an env file with the following settings. Store the following config as config.env

```shell
NODE_URL="https://api.testnet.iotaledger.net"
FAUCET_URL="https://faucet.testnet.iotaledger.net/api/enqueue"
EXPLORER_URL="https://explorer.iota.org/iota-testnet/"
```

We also need to create a JSON file containing the data you want to attest, this can be any data you want. Save this example file as `data.json` to use in the following scripts.

```json
{
  "docName": "bill-of-lading.pdf",
  "fingerprint": "0xf0b95a98b3dbc5ce1c9ce59d70af95a97599f100a7296ecdd1eb108bebfa047f",
  "mimeType": "application/pdf"
}
```

To attest the data issue the following command:

```shell
# Attest the data and store the id in the attestation.env file
twin-attestation attestation-attest --load-env config.env wallet.env verification-method.env --seed !SEED --owner !ADDRESS_0_BECH32 --verification-method-id !DID_VERIFICATION_METHOD_ID --private-key !DID_VERIFICATION_METHOD_PRIVATE_KEY --data-json data.json --env attestation.env
```

### attestation-verify

To verify the attestation and retrieve its details issue the following command.

```shell
twin-attestation attestation-verify --load-env config.env attestation.env --id !ATTESTATION_ID
```

You should see output to the following.

```json
{
  "id": "attestation:iota:aW90YS1uZnQ6dHN0OjB4MDI3M2M3ZGEyZjJhZjg1YTE1ZWMwZTQ0OWRmOWI3NTQwNWYzYWExOTQzZmYzMjJkM2ZlODIxMDFlNzEzMzYxYg==",
  "created": "2024-06-19T14:08:50Z",
  "ownerIdentity": "did:iota:tst:0x197c348b8ff62f515ca9685f7a4b567a073a0e6c492c641fdd029d909126da93",
  "data": {
    "docName": "bill-of-lading.pdf",
    "fingerprint": "0xf0b95a98b3dbc5ce1c9ce59d70af95a97599f100a7296ecdd1eb108bebfa047f",
    "mimeType": "application/pdf"
  },
  "proof": {
    "type": "jwt",
    "value": "eyJraWQiOiJkaWQ6aW90YTp0c3Q6MHgxOTdjMzQ4YjhmZjYyZjUxNWNhOTY4NWY3YTRiNTY3YTA3M2EwZTZjNDkyYzY0MWZkZDAyOWQ5MDkxMjZkYTkzI2F0dGVzdGF0aW9uIiwidHlwIjoiSldUIiwiYWxnIjoiRWREU0EifQ.eyJpc3MiOiJkaWQ6aW90YTp0c3Q6MHgxOTdjMzQ4YjhmZjYyZjUxNWNhOTY4NWY3YTRiNTY3YTA3M2EwZTZjNDkyYzY0MWZkZDAyOWQ5MDkxMjZkYTkzIiwibmJmIjoxNzE4ODA2MTMwLCJ2YyI6eyJAY29udGV4dCI6Imh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwidHlwZSI6IlZlcmlmaWFibGVDcmVkZW50aWFsIiwiY3JlZGVudGlhbFN1YmplY3QiOnsiZG9jTmFtZSI6ImJpbGwtb2YtbGFkaW5nLnBkZiIsImZpbmdlcnByaW50IjoiMHhmMGI5NWE5OGIzZGJjNWNlMWM5Y2U1OWQ3MGFmOTVhOTc1OTlmMTAwYTcyOTZlY2RkMWViMTA4YmViZmEwNDdmIiwibWltZVR5cGUiOiJhcHBsaWNhdGlvbi9wZGYifX19.7MF1NR5glR_4XIAAgo_BhZ-nlJKLE3T5GS4zEsBRTHK8_nV-RsZupdEJw_F62f6pj1nGP2xVV7M3yCjPG7G5Dg"
  }
}
```

### attestation-transfer

You can transfer the attestation to another holder using the following command. You must provide the seed from the current owner so that it can be unlocked and transferred. In this example we read the attestation id from the env file and transfer to a new holder identity which we create on the second address.

```shell
# Add some funds to the second address generated earlier
twin-attestation faucet --load-env config.env --address !ADDRESS_1_BECH32

# Create new identity on the second address
twin-attestation identity-create --load-env config.env wallet.env --seed !SEED --controller !ADDRESS_1_BECH32 --env identity2.env

# Transfer the attestation to the new holder (the original issuer is kept intact)
twin-attestation attestation-transfer --load-env config.env wallet.env attestation.env identity2.env --seed !SEED --id !ATTESTATION_ID --holder-address !ADDRESS_1_BECH32 --holder-identity !DID
```

If you repeat the attestation-verify command you should see the following updated details, with `holderIdentity` and `transferred` set.

```json
{
  "id": "attestation:iota:aW90YS1uZnQ6dHN0OjB4MDI3M2M3ZGEyZjJhZjg1YTE1ZWMwZTQ0OWRmOWI3NTQwNWYzYWExOTQzZmYzMjJkM2ZlODIxMDFlNzEzMzYxYg==",
  "created": "2024-06-19T14:08:50Z",
  "ownerIdentity": "did:iota:tst:0x197c348b8ff62f515ca9685f7a4b567a073a0e6c492c641fdd029d909126da93",
  "data": {
    "docName": "bill-of-lading.pdf",
    "fingerprint": "0xf0b95a98b3dbc5ce1c9ce59d70af95a97599f100a7296ecdd1eb108bebfa047f",
    "mimeType": "application/pdf"
  },
  "proof": {
    "type": "jwt",
    "value": "eyJraWQiOiJkaWQ6aW90YTp0c3Q6MHgxOTdjMzQ4YjhmZjYyZjUxNWNhOTY4NWY3YTRiNTY3YTA3M2EwZTZjNDkyYzY0MWZkZDAyOWQ5MDkxMjZkYTkzI2F0dGVzdGF0aW9uIiwidHlwIjoiSldUIiwiYWxnIjoiRWREU0EifQ.eyJpc3MiOiJkaWQ6aW90YTp0c3Q6MHgxOTdjMzQ4YjhmZjYyZjUxNWNhOTY4NWY3YTRiNTY3YTA3M2EwZTZjNDkyYzY0MWZkZDAyOWQ5MDkxMjZkYTkzIiwibmJmIjoxNzE4ODA2MTMwLCJ2YyI6eyJAY29udGV4dCI6Imh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwidHlwZSI6IlZlcmlmaWFibGVDcmVkZW50aWFsIiwiY3JlZGVudGlhbFN1YmplY3QiOnsiZG9jTmFtZSI6ImJpbGwtb2YtbGFkaW5nLnBkZiIsImZpbmdlcnByaW50IjoiMHhmMGI5NWE5OGIzZGJjNWNlMWM5Y2U1OWQ3MGFmOTVhOTc1OTlmMTAwYTcyOTZlY2RkMWViMTA4YmViZmEwNDdmIiwibWltZVR5cGUiOiJhcHBsaWNhdGlvbi9wZGYifX19.7MF1NR5glR_4XIAAgo_BhZ-nlJKLE3T5GS4zEsBRTHK8_nV-RsZupdEJw_F62f6pj1nGP2xVV7M3yCjPG7G5Dg"
  },
  "holderIdentity": "did:iota:tst:0x7eb877f0212b7aef197fbebf1c2816489d16b6a619f730cb3a371ace1075aed0",
  "transferred": "2024-06-19T13:45:40.694Z"
}
```
