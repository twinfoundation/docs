# Entity Storage Connector ScyllaDB

Entity Storage connector implementation using ScyllaDB.

## Installation

```shell
npm install @gtsc/entity-storage-connector-scylladb
```

## Testing

The tests developed are functional tests and need an instance of ScyllaDB up and running. To run ScyllaDB locally:

```shell
docker run -p 9042:9042 --name scylla --hostname scylla -d scylladb/scylla:5.4.9 --smp 1
```

Afterwards you can run the tests as follows:

```shell
npm run test
```

## Examples

Usage of the APIs is shown in the examples [examples.md](examples.md)

## Reference

Detailed reference documentation for the API can be found in [reference/globals.md](reference/globals.md)

## Changelog

The changes between each version can be found in [changelog.md](changelog.md)
