# Function: setupFaucetConnector()

> **setupFaucetConnector**(`options`, `connector?`): `IFaucetConnector`

Setup the faucet connector for use in the CLI commands.

## Parameters

### options

The options for the wallet connector.

#### nodeEndpoint

`string`

The node endpoint.

#### network?

`string`

The network.

#### endpoint

`string`

The faucet endpoint.

#### vaultSeedId?

`string`

The vault seed ID.

### connector?

`"iota"`

The connector to use.

## Returns

`IFaucetConnector`

The faucet connector.
