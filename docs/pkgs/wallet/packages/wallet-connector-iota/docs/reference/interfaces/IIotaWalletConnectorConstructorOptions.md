# Interface: IIotaWalletConnectorConstructorOptions

Options for the IOTA Wallet Connector.

## Properties

### vaultConnectorType?

> `optional` **vaultConnectorType**: `string`

Vault connector to use for wallet secrets.

#### Default

```ts
vault
```

***

### faucetConnectorType?

> `optional` **faucetConnectorType**: `string`

Optional faucet for requesting funds.

#### Default

```ts
faucet
```

***

### config

> **config**: `IIotaConfig`

The configuration for the connector.
