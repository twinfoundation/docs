# @twin.org/identity-cli - Examples

## Running

To install and run the CLI locally use the following commands:

```shell
npm install @twin.org/identity-cli -g
twin-identity
```

or run directly using NPX:

```shell
npx "@twin.org/identity-cli"
```

Output

```shell
🌍 TWIN Identity v1.0.0

Usage: twin-identity [command]

Options:
  -V, --version                             output the version number
  --lang <lang>                             The language to display the output in. (default: "en")
  --load-env [env...]                       Load the env files to initialise any environment variables.
  -h, --help                                display help for command

Commands:
  mnemonic [options]                        Create a mnemonic.
  address [options]                         Create bech32 addresses and keys from the seed.
  faucet [options]                          Request funds from the faucet.
  transfer [options]                        Transfer funds from one address to another.
  identity-create [options]                 Create a Decentralized Identifier (DID).
  identity-resolve [options]                Resolve a Decentralized Identifier (DID).
  verification-method-add [options]         Add a verification method to a DID.
  verification-method-remove [options]      Remove a verification method from a DID.
  service-add [options]                     Add a service to a DID.
  service-remove [options]                  Remove a service from a DID.
  verifiable-credential-create [options]    Create a verifiable credential.
  verifiable-credential-verify [options]    Verify a verifiable credential.
  verifiable-credential-revoke [options]    Revoke a verifiable credential.
  verifiable-credential-unrevoke [options]  Unrevoke a verifiable credential.
  proof-create [options]                    Create a proof for some data using a verification method.
  proof-verify [options]                    Verify a proof for some data using a verification method.
```

You can get further detail on the sub commands by using the help option for the individual commands.

```shell
twin-identity identity-create --help
```

Output

```shell
🌍 TWIN Identity v1.0.0

Usage: twin-identity identity-create [options]

Creates a Decentralized Identifier (DID).

Options:
  --seed <seed>              The seed for the controller address in hex or base64 used to create the DID, or start with ! to read environment variable.
  --address-index <index>    The address index to use for the creation. (default: "0")
  --no-console               Hides the output in the console.
  --json <filename>          Creates a JSON file containing the output.
  --merge-json               If the JSON file already exists merge the data instead of overwriting.
  --env <filename>           Creates an env file containing the output.
  --merge-env                If the env file already exists merge the data instead of overwriting.
  --node <url>               The url for the node endpoint, or an environment variable name containing the url. (default: "!NODE_URL")
  --explorer <url>           The url for the explorer endpoint, or an environment variable name containing the url. (default: "!EXPLORER_URL")
  -h, --help                 display help for command
```

The commands `mnemonic`, `address`, `faucet` and `transfer` are described in more detail in the examples for `crypto-cli` and `wallet-cli`.

## Command

### identity-create

Use this command to create a new DID, the wallet address must have sufficient funds to store the identity. The seed and the funds can be generated using the `mnemonic` and `faucet` commands.

```shell
# Generate a seed and mnemonic and store it in the env file
twin-identity mnemonic --env wallet.env
# Generate an address and store it in the env file
twin-identity address --load-env wallet.env --hrp tst --seed !SEED --count 4 --env wallet.env --merge-env
```

To run this on the IOTA testnet you will need an env file with the following settings. Store the following config as config.env

```shell
NODE_URL="https://api.devnet.iota.cafe"
FAUCET_URL="https://faucet.devnet.iota.cafe"
COIN_TYPE="4218"
NETWORK="devnet"
EXPLORER_URL="https://explorer.iota.org/"
```

To then request some funds and generate the identity you can issue the following commands:

```shell
# Fund the wallet address from the faucet loading the config and wallet env files
twin-identity faucet --load-env config.env wallet.env --address !ADDRESS_0
# Create an identity
twin-identity identity-create --load-env config.env wallet.env --seed !SEED --env identity.env
```

### identity-resolve

The identity resolve will lookup and identity by DID to check it exists and return the DID document.

```shell
twin-identity identity-resolve --load-env config.env identity.env --did !DID --json did-document.json
```

### verification-method-add

This command will add a verification method to a DID document.

```shell
twin-identity verification-method-add --load-env config.env wallet.env identity.env --seed !SEED --did !DID --type verificationMethod --env verification-method.env
```

### verification-method-remove

This command will remove a verification method from a DID document.

```shell
twin-identity verification-method-remove --load-env config.env wallet.env identity.env verification-method.env --seed !SEED  --id !DID_VERIFICATION_METHOD_ID
```

### service-add

This command will add a service to a DID document.

```shell
twin-identity service-add --load-env config.env wallet.env identity.env --seed !SEED --did !DID --id linked-domain --type LinkedDomains --endpoint https://www.twindev.org --env service.env
```

### service-remove

This command will remove a service from the DID document.

```shell
twin-identity service-remove --load-env config.env wallet.env identity.env service.env --seed !SEED --did !DID --id !DID_SERVICE_ID
```

## verifiable-credential-create

This command will generate a verifiable credential using the specified verification method. You will need to supply the data as a json file

```json
{
  "name": "Alice",
  "degreeName": "Bachelor of Science and Arts"
}
```

```shell
twin-identity verifiable-credential-create --load-env config.env verification-method.env --id !DID_VERIFICATION_METHOD_ID --private-key !DID_VERIFICATION_METHOD_PRIVATE_KEY --credential-id https://example.edu/credentials/3732 --types UniversityDegreeCredential --subject-json subject.json --env vc.env --revocation-index 0
```

This will output the verifiable credential as a JSON Web Token e.g.

```shell
eyJraWQiOiJkaWQ6aW90YTp0c3Q6MHgxZTQ3YWQ0MjY4YWI5ZWNhNTFkYTkwNmRkNzE4MDIxZmJkNGYyZGUxYmU5NjA4NmRjMTMzZDQ0MmIwYjk3MzIyI2V5em9GMHFEUmtSQ0FlU1Rmdjd6WWFQNU00U2c2TkJLQUZ6eElhQVBTQzAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJpc3MiOiJkaWQ6aW90YTp0c3Q6MHgxZTQ3YWQ0MjY4YWI5ZWNhNTFkYTkwNmRkNzE4MDIxZmJkNGYyZGUxYmU5NjA4NmRjMTMzZDQ0MmIwYjk3MzIyIiwibmJmIjoxNzE4MTk3NDA5LCJqdGkiOiJodHRwczovL2V4YW1wbGUuZWR1L2NyZWRlbnRpYWxzLzM3MzIiLCJ2YyI6eyJAY29udGV4dCI6Imh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImRlZ3JlZU5hbWUiOiJCYWNoZWxvciBvZiBTY2llbmNlIGFuZCBBcnRzIiwibmFtZSI6IkFsaWNlIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsiaWQiOiJkaWQ6aW90YTp0c3Q6MHgxZTQ3YWQ0MjY4YWI5ZWNhNTFkYTkwNmRkNzE4MDIxZmJkNGYyZGUxYmU5NjA4NmRjMTMzZDQ0MmIwYjk3MzIyI3Jldm9jYXRpb24iLCJ0eXBlIjoiUmV2b2NhdGlvbkJpdG1hcDIwMjIiLCJyZXZvY2F0aW9uQml0bWFwSW5kZXgiOiIwIn19fQ.O3tMQ1UdGSI2qv9ia3xiT1yTmvpnJKd749POMSy42-SWTWN99HyYr5SEVIDj5cLdCORRP3Se4O7wxPe7_tfmCw
```

## verifiable-credential-verify

You can verify a verifiable credential stored as a JWT using this command.

```shell
twin-identity verifiable-credential-verify --load-env config.env vc.env --jwt !DID_VERIFIABLE_CREDENTIAL_JWT
```

## verifiable-credential-revoke

You can revoke a verifiable credential by revoking the index on the generating document.

```shell
twin-identity verifiable-credential-revoke --load-env config.env wallet.env identity.env --seed !SEED --did !DID --revocation-index 5
```

## verifiable-credential-unrevoke

You can unrevoke a verifiable credential by revoking the index on the generating document.

```shell
twin-identity verifiable-credential-unrevoke --load-env config.env wallet.env identity.env --seed !SEED --did !DID --revocation-index 5
```

## proof-create

This command will generate a proof using the specified verification method.

```shell
twin-identity proof-create --load-env config.env verification-method.env --id !DID_VERIFICATION_METHOD_ID --private-key !DID_VERIFICATION_METHOD_PRIVATE_KEY --document-filename unsecured.json --json data-proof.json
```

This will output the proof.

## proof-verify

This command will verify a proof for a document.

```shell
twin-identity proof-verify --load-env config.env verification-method.env --id !DID_VERIFICATION_METHOD_ID --document-filename unsecured.json --proof-filename data-proof.json
```
