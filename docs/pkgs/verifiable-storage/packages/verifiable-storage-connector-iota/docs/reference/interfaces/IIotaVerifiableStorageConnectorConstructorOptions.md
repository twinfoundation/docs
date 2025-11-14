# Interface: IIotaVerifiableStorageConnectorConstructorOptions

Options for the IotaVerifiableStorageConnector.

## Properties

### config

> **config**: [`IIotaVerifiableStorageConnectorConfig`](IIotaVerifiableStorageConnectorConfig.md)

The configuration to use for the connector.

***

### vaultConnectorType?

> `optional` **vaultConnectorType**: `string`

The vault connector type to use.

#### Default

```ts
"vault"
```

***

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The logging component type.

#### Default

```ts
logging
```

***

### deploymentConfig?

> `optional` **deploymentConfig**: `ISmartContractDeployments`

Optional deployment configuration to use instead of the default compiled configuration.
This allows tests and other scenarios to use different contract deployments.

#### Default

```ts
Uses compiled smart-contract-deployments.json
```
