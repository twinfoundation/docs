# TWIN NFT Connector IOTA

Implementation of the NFT connector using IOTA.

## Installation

```shell
npm install @twin.org/nft-connector-iota
```

## Testing

The tests developed are functional tests and need the following components to be running:

### Prerequisites

1. **IOTA Testnet Access**: Tests run against the IOTA testnet
2. **Gas Station Service**: Required for gas station integration tests (20 comprehensive tests)
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

### Environment Configuration

The tests require environment variables to be configured. Create a `.env.dev` file in the `tests` directory with your test mnemonics:

```env
TEST_MNEMONIC="your test mnemonic phrase here"
TEST_2_MNEMONIC="second test mnemonic phrase here"
TEST_NODE_MNEMONIC="node mnemonic phrase here"
```

### Running Tests

After setting up the gas station and environment variables, you can run the tests:

```sh
npm run test
```

The test suite includes:

- **13 standard NFT tests**: Basic NFT operations (mint, transfer, update, burn)
- **20 gas station tests**: Comprehensive sponsored transaction testing

### Test Coverage

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
