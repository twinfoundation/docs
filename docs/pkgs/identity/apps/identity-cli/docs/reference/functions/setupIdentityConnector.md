# Function: setupIdentityConnector()

> **setupIdentityConnector**(`options`, `connector`?): `IIdentityConnector`

Setup the identity connector for use in the CLI commands.

## Parameters

### options

The options for the identity connector.

#### nodeEndpoint

`string`

The node endpoint.

#### network

`string`

The network.

#### addressIndex

`number`

The wallet index.

#### vaultSeedId

`string`

The vault seed ID.

### connector?

[`IdentityConnectorTypes`](../type-aliases/IdentityConnectorTypes.md)

The connector to use.

## Returns

`IIdentityConnector`

The identity connector.
