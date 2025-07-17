# TWIN Verifiable Storage Connector IOTA

Implementation of the Verifiable Storage connector using IOTA.

## Installation

```shell
npm install @twin.org/verifiable-storage-connector-iota
```

## Testing

The tests developed are functional tests and need the following components to be running:

### Prerequisites

1. **IOTA Testnet Access**: Tests run against the IOTA testnet
2. **Gas Station Service**: Required for gas station integration tests (17 comprehensive tests)
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

You can generate test mnemonics using the TWIN crypto CLI:

```sh
npx "@twin.org/crypto-cli" mnemonic --env ./tests/.env.dev --merge-env
```

### Running Tests

After setting up the gas station and environment variables, you can run the tests:

```sh
npm run test
```

The test suite includes:

- **13 standard verifiable storage tests**: Basic operations (create, update, retrieve, remove)
- **17 gas station tests**: Comprehensive sponsored transaction testing

### Test Coverage

#### Standard Tests

- Verifiable item creation and retrieval
- Item updates and versioning
- Allow list management
- Access control validation
- Item removal operations

#### Gas Station Integration Tests

The gas station integration tests validate:

- Configuration with and without gas station
- All verifiable storage operations using sponsored transactions
- Error handling for invalid configurations
- Complex workflows with allow lists
- Performance comparison between regular and gas station transactions

### Test Files

- `iotaVerifiableStorageConnector.spec.ts`: Standard verifiable storage functionality
- `iotaVerifiableStorageConnectorGasStation.spec.ts`: Gas station integration tests

### Running Individual Test Files

You can run specific test files for focused testing:

```sh
# Run only standard verifiable storage tests
npm test -- iotaVerifiableStorageConnector.spec.ts

# Run only gas station integration tests
npm test -- iotaVerifiableStorageConnectorGasStation.spec.ts
```

### Troubleshooting

If tests fail, check the following:

1. **Gas Station**: Ensure the Docker container is running and accessible at `http://localhost:9527`
2. **Environment Variables**: Verify all required mnemonics are set in `.env.dev`
3. **Network Access**: Confirm connection to IOTA testnet endpoints
4. **Faucet Funding**: Tests automatically request funds from the testnet faucet

Common solutions:

- Restart the gas station container if connectivity issues occur
- Regenerate test mnemonics if wallet-related errors appear
- Check Docker logs: `docker logs twin-gas-station-test`

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
