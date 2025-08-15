# TWIN Identity Connector Universal

Identity connector implementation using Universal resolver.

## Installation

```shell
npm install @twin.org/identity-connector-universal
```

## Testing

To test the universal resolver you will need to run the docker image.

```shell
docker run -d --name twin-identity-universal -e NETWORK=testnet -p 8180:8080 iotaledger/uni-resolver-driver-iota:v0.2.0-alpha
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
