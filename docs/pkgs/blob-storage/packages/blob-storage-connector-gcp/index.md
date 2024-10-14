# TWIN Blob Storage Connector Google Cloud Storage

Blob Storage connector implementation using [Google Cloud Storage](https://cloud.google.com/storage/docs/reference/libraries).

## Installation

```shell
npm install @twin.org/blob-storage-connector-gcp
```

## Testing

The tests developed are functional tests and need an instance of Google Cloud Storage up and running. For testing purposes, we use [fake-gcs-server](https://github.com/fsouza/fake-gcs-server), which is an emulator for Google Cloud Storage.

To run Google Cloud Storage locally using the emulator with HTTP protocol:

```shell
docker run -p 4443:4443 --name twin-blob-gcp -d fsouza/fake-gcs-server -scheme http
```

This command pulls and runs the `fake-gcs-server` Docker image, which provides a local emulation of Google Cloud Storage. We use the `-scheme http` flag to configure the emulator to use HTTP instead of HTTPS for local testing purposes. This simplifies the setup and avoids potential SSL/TLS configuration issues in the local environment.

Afterwards you can run the tests as follows:

```shell
npm run test
```

Note that while we use HTTP for local testing, in a production environment, you should always use HTTPS for secure communication with Google Cloud Storage.

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
