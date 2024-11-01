# TWIN Entity Storage Connector Cosmos DB

Entity Storage connector implementation using Cosmos DB storage.

## Installation

```shell
npm install @twin.org/entity-storage-connector-cosmosdb
```

## Testing

The tests developed are functional tests and need an instance of CosmosDB up and running. To run CosmosDB locally there are two possibilities:

To run a Docker image of Azure CosmosDB:

```sh
docker run -d --platform=linux/amd64 -p 8081:8081 -p 10250:10250 -p 10251:10251 -p 10252:10252 -p 10253:10253 -p 10254:10254 -m 3g --name twin-entity-cosmos -e AZURE_COSMOS_EMULATOR_PARTITION_COUNT=10 -e AZURE_COSMOS_EMULATOR_ENABLE_DATA_PERSISTENCE=true -e AZURE_COSMOS_EMULATOR_IP_ADDRESS_OVERRIDE='127.0.0.1' mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator
```

Or

To install and run the Azure CosmosDB Emulator [Azure CosmosDB Emulator](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-develop-emulator)

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
