# TWIN Entity Storage Connector Firestore

Entity Storage connector implementation using Firestore storage.

## Installation

```shell
npm install @twin.org/entity-storage-connector-gcp-firestore
```

## Testing

The tests developed are functional tests and need an instance of Firestore up and running. To run Firestore locally:

```sh
docker run -d --name twin-entity-storage-firestore -p 20200:8080 gcr.io/google.com/cloudsdktool/cloud-sdk:emulators gcloud beta emulators firestore start --host-port=0.0.0.0:8080
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
