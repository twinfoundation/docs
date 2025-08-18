# TWIN Entity Storage Connector Dynamo DB

Entity Storage connector implementation using Dynamo DB storage.

## Installation

```shell
npm install @twin.org/entity-storage-connector-dynamodb
```

## Testing

The tests developed are functional tests and need an instance of DynamoDB up and running. To run DynamoDB locally:

```sh
docker run -p 8500:8000 --name twin-entity-storage-dynamodb --hostname dynamodb -d amazon/dynamodb-local
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
