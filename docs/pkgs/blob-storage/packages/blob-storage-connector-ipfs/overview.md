# GTSC Blob Storage Connector IPFS

Blob Storage connector implementation using [IPFS](https://ipfs.tech/).

## Installation

```shell
npm install @gtsc/blob-storage-connector-ipfs
```

## Testing

The tests developed are functional tests and need an instance of IPFS up and running. To run IPFS locally:

```shell
docker run -p 4001:4001 -p 4001:4001/udp -p 8080:8080 -p 5001:5001 --name ipfs --hostname ipfs -d ipfs/kubo:latest
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
