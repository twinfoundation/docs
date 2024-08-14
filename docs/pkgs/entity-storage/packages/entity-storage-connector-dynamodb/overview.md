# GTSC Entity Storage Connector Dynamo DB

Entity Storage connector implementation using Dynamo DB storage.

## Installation

```shell
npm install @gtsc/entity-storage-connector-dynamodb
```

## Testing

The tests developed are functional tests and need an instance of DynamoDB up and running. To run DynamoDB locally:

```sh
docker run -p 8000:8000 --name dynamodb --hostname dynamodb -d amazon/dynamodb-local
```

Afterwards you can run the tests as follows:

```sh
npm run test
```

## Examples

Usage of the APIs is shown in the examples [examples.md](examples.md)

## Reference

Detailed reference documentation for the API can be found in [reference/globals.md](reference/globals.md)

## Changelog

The changes between each version can be found in [changelog.md](changelog.md)
