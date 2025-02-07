# TWIN Entity Storage Connector MySQL

Entity Storage connector implementation using MySQL storage.

## Installation

```shell
npm install @twin.org/entity-storage-connector-mysql
```

## Testing

The tests developed are functional tests and need an instance of MySql up and running. To run MySql locally:

```sh
docker run -p 3306:3306 --name twin-entity-storage-mysql --hostname mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:latest
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
