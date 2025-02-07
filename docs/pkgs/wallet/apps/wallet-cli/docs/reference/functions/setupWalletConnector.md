# Function: setupWalletConnector()

> **setupWalletConnector**(`options`, `connector`?): `IWalletConnector`

Setup the wallet connector for use in the CLI commands.

## Parameters

### options

The options for the wallet connector.

#### nodeEndpoint

`string`

The node endpoint.

#### network

`string`

The network.

#### vaultSeedId

`string`

The vault seed ID.

### connector?

[`WalletConnectorTypes`](../type-aliases/WalletConnectorTypes.md)

The connector to use.

## Returns

`IWalletConnector`

The wallet connector.
