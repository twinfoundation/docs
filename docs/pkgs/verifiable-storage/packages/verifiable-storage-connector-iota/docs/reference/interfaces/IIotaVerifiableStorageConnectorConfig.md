# Interface: IIotaVerifiableStorageConnectorConfig

Configuration interface for IOTA VerifiableStorageConnector.

## Extends

- `IIotaConfig`

## Properties

### contractName?

> `optional` **contractName**: `string`

The name of the contract to use.

#### Default

```ts
"verifiable-storage"
```

***

### walletAddressIndex?

> `optional` **walletAddressIndex**: `number`

The wallet address index to use when deriving addresses.

#### Default

```ts
0
```

***

### packageControllerAddressIndex?

> `optional` **packageControllerAddressIndex**: `number`

The package controller address index to use when creating package.

#### Default

```ts
0
```

***

### enableCostLogging?

> `optional` **enableCostLogging**: `boolean`

Enable cost logging.

#### Default

```ts
false
```

#### Overrides

`IIotaConfig.enableCostLogging`
