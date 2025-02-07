# TWIN Entity Storage Connector MongoDb

Entity Storage connector implementation using MongoDb storage.

## Installation

```shell
npm install @twin.org/entity-storage-connector-mongodb
```

## Testing

The tests developed are functional tests and need an instance of MongoDb up and running. To run MongoDb locally:

```sh
docker run -p 27017:27017 --name twin-entity-storage-mongodb --hostname mongo -d mongo
```

Afterwards you can run the tests as follows:

```sh
npm run test
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
