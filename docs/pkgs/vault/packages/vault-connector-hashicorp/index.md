# TWIN Vault Connector Hashicorp

Vault connector implementation using Hashicorp.

## Installation

```shell
npm install @twin.org/vault-connector-hashicorp
```

## Testing

The tests developed are functional tests and need an instance of Hashicorp Vault up and running. To run Hashicorp Vault locally:

```sh
docker run -d --name twin-hashicorp-vault --cap-add=IPC_LOCK -e 'VAULT_DEV_ROOT_TOKEN_ID=root' -p 8200:8200 hashicorp/vault:1.18.0
```

After starting the vault, you need to do the following steps within the docker shell, launch the shell using:

```sh
docker exec -t -i twin-hashicorp-vault sh
```

1. Set the environment variables for the vault address and token:

```sh
export VAULT_ADDR="http://127.0.0.1:8200"
export VAULT_TOKEN="root"
```

2. Enable the transit secret engine:

```sh
vault secrets enable -address="http://127.0.0.1:8200" transit
```

Afterwards you can run the tests from your development environment as follows:

```sh
npm run test
```

## Examples

Usage of the APIs is shown in the examples [docs/examples.md](docs/examples.md)

## Reference

Detailed reference documentation for the API can be found in [docs/reference/index.md](docs/reference/index.md)

## Changelog

The changes between each version can be found in [docs/changelog.md](docs/changelog.md)
