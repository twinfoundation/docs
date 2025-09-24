# TWIN NFT Connector IOTA

Implementation of the NFT connector using IOTA.

## Installation

```shell
npm install @twin.org/nft-connector-iota
```

## Testing

The tests developed are functional tests and need instances of the Test IOTA Gas Station, and Universal Resolver up and running. To run these services locally using Docker:

### Prerequisites

1. **IOTA Testnet Access**: Tests run against the IOTA testnet
2. **Gas Station Service**: Required for gas station integration tests
3. **Test Mnemonics**: Required for wallet operations

### Gas Station Setup

To run the comprehensive gas station integration tests, you need to start the gas station Docker container:

```sh
docker run -d --name twin-gas-station-test -p 6379:6379 -p 9527:9527 -p 9184:9184 twinfoundation/twin-gas-station-test:latest
```

This starts:

- Port 6379: Redis for gas station state
- Port 9527: Gas Station API endpoint
- Port 9184: Admin interface

### Environment Variables

The tests require the following environment variables to be set:

```shell
# Required for all tests
export TEST_MNEMONIC="abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
export TEST_2_MNEMONIC="abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
export TEST_NODE_MNEMONIC="abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
export TEST_DEPLOYER_MNEMONIC="abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
export TEST_NODE_ENDPOINT="https://api.testnet.iota.cafe"
export TEST_FAUCET_ENDPOINT="https://faucet.testnet.iota.cafe/gas"
export TEST_NETWORK="testnet"

# Required for gas station integration tests
export TEST_GAS_STATION_URL="http://localhost:9527"
export TEST_GAS_STATION_AUTH_TOKEN="qEyCL6d9BKKFl/tfDGAKeGFkhUlf7FkqiGV7Xw4JUsI="
```

#### Test Mnemonics

The code will automatically generate random mnemonics if not provided, but for development consistency, it's recommended to set your own.

**Setup Steps:**

1. Create a `./tests/.env.dev` file:

```shell
# Test Network Configuration
TEST_NETWORK=testnet
TEST_NODE_ENDPOINT=https://api.testnet.iota.cafe
TEST_FAUCET_ENDPOINT=https://faucet.testnet.iota.cafe/gas

# Test Mnemonics - Replace with generated values
TEST_MNEMONIC=your_generated_mnemonic_here
TEST_2_MNEMONIC=your_generated_mnemonic_here
TEST_NODE_MNEMONIC=your_generated_mnemonic_here
TEST_DEPLOYER_MNEMONIC=your_generated_mnemonic_here

# Gas Station Configuration
TEST_GAS_STATION_URL=http://localhost:9527
TEST_GAS_STATION_AUTH_TOKEN=qEyCL6d9BKKFl/tfDGAKeGFkhUlf7FkqiGV7Xw4JUsI=
```

2. Generate secure mnemonics for each variable:

```shell
# Generate TEST_MNEMONIC
npx "@twin.org/crypto-cli" mnemonic --env ./tests/.env.dev --env-prefix TEST_

# Generate TEST_2_MNEMONIC
npx "@twin.org/crypto-cli" mnemonic --env ./tests/.env.dev --env-prefix TEST_2_

# Generate TEST_NODE_MNEMONIC
npx "@twin.org/crypto-cli" mnemonic --env ./tests/.env.dev --env-prefix TEST_NODE_

# Generate TEST_DEPLOYER_MNEMONIC
npx "@twin.org/crypto-cli" mnemonic --env ./tests/.env.dev --env-prefix TEST_DEPLOYER_
```

**Required Mnemonics:**

- `TEST_MNEMONIC`: Primary test user wallet
- `TEST_2_MNEMONIC`: Secondary test user wallet (for transfer tests)
- `TEST_NODE_MNEMONIC`: Node operator wallet (for unauthorized access tests)
- `TEST_DEPLOYER_MNEMONIC`: Contract deployment wallet

### Test Coverage

The test suite includes:

- Basic NFT operations (mint, transfer, update, burn)
- Comprehensive sponsored transaction testing

The gas station integration tests validate:

- Configuration with and without gas station
- All NFT operations using sponsored transactions
- Error handling for invalid configurations
- Complex workflows and metadata operations

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
