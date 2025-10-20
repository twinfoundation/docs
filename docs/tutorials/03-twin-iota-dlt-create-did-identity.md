## How to Create a DID IOTA Identity

These steps describe the manual process for creating a Decentralized Identifier (DID) on the IOTA network. Future versions will include API automation.

Note: This tutorial is conducted on the IOTA testnet. Users can modify NETWORK="testnet" in the config.env file for other networks.

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
npx "@twin.org/identity-cli@next" identity-create --load-env config.env wallet.env --seed $SEED --address-index 0 --env identity.env
```

### Step 5: Add a Verification Method (Optional)

This step adds a cryptographic key to your DID, which can be used for signing and verifying credentials.

```sh
npx "@twin.org/identity-cli@next" verification-method-add --load-env config.env wallet.env identity.env --seed '!SEED' --did '!DID' --type verificationMethod --env verification-method.env
```

---
