# TWIN Identity Connector IOTA

Identity connector implementation using IOTA.

## Installation

```shell
npm install @twin.org/identity-connector-iota
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
export TEST_NODE_ENDPOINT="https://api.testnet.iota.cafe"
export TEST_FAUCET_ENDPOINT="https://faucet.testnet.iota.cafe/gas"
export TEST_NETWORK="testnet"

# Required for gas station integration tests
export TEST_GAS_STATION_URL="http://localhost:9527"
export TEST_GAS_STATION_AUTH_TOKEN="qEyCL6d9BKKFl/tfDGAKeGFkhUlf7FkqiGV7Xw4JUsI="
```

### Running Tests

After setting up the gas station and environment variables, you can run the tests:

```sh
npm run test
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
