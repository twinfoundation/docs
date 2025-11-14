# TWIN DLT IOTA

DLT helpers for use with IOTA.

## Installation

```shell
npm install @twin.org/dlt-iota
```

## Testing

The tests developed are functional tests and need an instance of the IOTA Gas Station and Redis up and running.

The simplest way to set up the testing environment using our unified container:

```shell
docker run -d --name twin-gas-station-test -p 9527:9527 -p 6379:6379 -p 9184:9184 twinfoundation/twin-gas-station-test:latest
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
