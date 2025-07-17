# TWIN Wallet Connector IOTA

Wallet connector implementation using IOTA.

## Installation

```shell
npm install @twin.org/wallet-connector-iota
```

## Testing

The tests developed are functional tests and need the following components to be running:

### Quick Setup (Recommended)

The simplest way to set up the testing environment using our unified container:

```shell
# Start the unified container with Redis + Gas Station
docker run -d --name twin-gas-station-test -p 6379:6379 -p 9527:9527 -p 9184:9184 twinfoundation/twin-gas-station-test:latest

# Wait a moment for services to start, then verify
docker exec twin-gas-station-test redis-cli ping  # Should return: PONG
curl http://localhost:9527/  # Should return: OK

# Services are ready - you can now run tests
npm run test

# When finished, cleanup
docker stop twin-gas-station-test && docker rm twin-gas-station-test
```

That's it! The unified container includes:

- Redis server (port 6379)
- IOTA Gas Station (port 9527, metrics 9184)
- Pre-configured with test keypair and settings
- Health checks and proper startup sequencing

### Environment Configuration

The tests require environment variables to be configured. The following files in the `tests` directory are already pre-configured for testnet:

- `.env` - Basic configuration (node endpoints, network settings)
- `.env.dev` - Test mnemonics and authentication tokens

The tests include both basic wallet operations and gas station integration tests that verify:

- Wallet creation and key management
- Address generation and balance checking
- Gas station sponsorship functionality
- Faucet integration for test funding

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
