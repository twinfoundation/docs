# @twin.org/nft-cli - Examples

## Running

To install and run the CLI locally use the following commands:

```shell
npm install @twin.org/nft-cli -g
twin-nft
```

or run directly using NPX:

```shell
npx "@twin.org/nft-cli"
```

You should see output similar to the following:

```shell
🌍 TWIN NFT v1.0.0

Usage: twin-nft [command]

Options:
  -V, --version                             output the version number
  --lang <lang>                             The language to display the output in. (default: "en")
  --load-env [env...]                       Load the env files to initialise any environment variables.
  -h, --help                                display help for command

Commands:
  mnemonic [options]      Create a mnemonic.
  address [options]       Create addresses and keys from the seed.
  faucet [options]        Request funds from the faucet.
  nft-mint [options]      Mint an NFT.
  nft-resolve [options]   Resolve an NFT.
  nft-burn [options]      Burn an NFT.
  nft-transfer [options]  Transfer an NFT.
```

You can get further details on the sub commands by using the help option for the individual commands.

```shell
twin-nft nft-mint --help
```

Output

```shell
🌍 TWIN NFT v1.0.0

Usage: twin-nft nft-mint [options]

Mint an NFT.

Options:
  --seed <seed>                      The seed for the issuer address in hex or base64 used to fund the minting, or start with ! to read environment variable.
  --issuer <issuer>                  The address of the NFT issuer, or start with ! to read environment variable.
  --tag <tag>                        The tag for the NFT.
  --immutable-json <immutable-json>  A JSON file to read which includes the immutable data for the NFT.
  --mutable-json <mutable-json>      A JSON file to read which includes the mutable data for the NFT.
  --no-console                       Hides the output in the console.
  --json <filename>                  Creates a JSON file containing the output.
  --merge-json                       If the JSON file already exists merge the data instead of overwriting.
  --env <filename>                   Creates an env file containing the output.
  --merge-env                        If the env file already exists merge the data instead of overwriting.
  --node <url>                       The url for the node endpoint, or an environment variable name containing the url. (default: "!NODE_URL")
  --explorer <url>                   The url for the explorer endpoint, or an environment variable name containing the url. (default: "!EXPLORER_URL")
  -h, --help                         display help for command
```

The commands `mnemonic`, `address` and `faucet` are described in more detail in the examples for `crypto-cli` and `wallet-cli`.

## Command

### nft-mint

Use this command to mint a new NFT, the issuer address must have sufficient funds to store the NFT. The seed and the funds can be generated using the `mnemonic` and `faucet` commands.

```shell
# Generate a seed and mnemonic and store it in the env file
twin-nft mnemonic --env wallet.env
# Generate an address and store it in the env file
twin-nft address --load-env wallet.env --hrp tst --seed !SEED --count 4 --env wallet.env --merge-env
```

To run this on the IOTA testnet you will need an env file with the following settings. Store the following config as config.env

```shell
NODE_URL="https://api.testnet.iotaledger.net"
FAUCET_URL="https://faucet.testnet.iotaledger.net/api/enqueue"
EXPLORER_URL="https://explorer.iota.org/iota-testnet/"
```

We also need to create a JSON file containing the immutable metadata for the NFT. The following JSON file follows the IRC27 standard for NFT data. Save this file as `immutable.json` to use in the following scripts.

```json
{
  "standard": "IRC27",
  "version": "v1.0",
  "type": "video/mp4",
  "uri": "https://ipfs.io/ipfs/QmPoYcVm9fx47YXNTkhpMEYSxCD3Bqh7PJYr7eo5YjLgiT",
  "name": "Test NFT",
  "collectionName": "Test Collection",
  "issuerName": "Test Issuer",
  "description": "This is a test NFT."
}
```

To request some funds and mint the NFT you can issue the following commands:

```shell
# Fund the controller address from the faucet loading the config and wallet env files
twin-nft faucet --load-env config.env wallet.env --address !ADDRESS_0

# Mint the NFT and store the id in the nft.env file
twin-nft nft-mint --load-env config.env wallet.env --seed !SEED --issuer !ADDRESS_0 --tag MY-NFT --immutable-json immutable.json --env nft.env
```

### nft-resolve

To resolve the NFT and retrieve its details issue the following command.

```shell
twin-nft nft-resolve --load-env config.env nft.env --id !NFT_ID
```

### nft-transfer

You can transfer the NFT to another address using the following command. You must provide the seed from the current issuer/owner so that it can be unlocked and transferred. In this example we read the nft id from the env file and transfer to the second address we created earlier.

```shell
twin-nft nft-transfer --load-env config.env wallet.env nft.env --seed !SEED --id !NFT_ID --recipient !ADDRESS_1
```

### nft-burn

To burn the NFT and reclaim the funds we issue the following command. We still require the seed as we need to transfer the deposit funds back to the issuer/owner.

```shell
twin-nft nft-burn --load-env config.env wallet.env nft.env --seed !SEED --issuer !ADDRESS_1 --id !NFT_ID
```
