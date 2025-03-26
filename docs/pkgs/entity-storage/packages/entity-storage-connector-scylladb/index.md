# Entity Storage Connector ScyllaDB

Entity Storage connector implementation using ScyllaDB.

## Installation

```shell
npm install @twin.org/entity-storage-connector-scylladb
```

## Testing

The tests developed are functional tests and need an instance of ScyllaDB up and running. To run ScyllaDB locally:

```shell
docker run -p 9042:9042 --name twin-entity-storage-scylla --hostname scylla -d scylladb/scylla:5.4.9 --smp 1
```

Afterwards you can run the tests as follows:

```shell
npm run test
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
