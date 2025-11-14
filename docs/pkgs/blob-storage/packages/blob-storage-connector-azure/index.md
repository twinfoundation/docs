# TWIN Blob Storage Connector Azure

Blob Storage connector implementation using [Azure](https://learn.microsoft.com/en-us/azure/storage/common/storage-samples-javascript?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json).

## Installation

```shell
npm install @twin.org/blob-storage-connector-azure
```

## Testing

The tests developed are functional tests and need an instance of Azure up and running. To run Azure locally using azurite as microsoft container:

```shell
docker run -p 20610:10000 --name twin-blob-azure -d -e AZURITE_ACCOUNTS=testAccount:testKey mcr.microsoft.com/azure-storage/azurite azurite-blob --blobHost 0.0.0.0
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
