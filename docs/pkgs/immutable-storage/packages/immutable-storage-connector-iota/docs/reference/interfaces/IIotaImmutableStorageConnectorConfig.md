# Interface: IIotaImmutableStorageConnectorConfig

Configuration interface for IOTA ImmutableStorageConnector.

## Extends

- `IIotaConfig`

## Properties

### contractName?

> `optional` **contractName**: `string`

The name of the contract to use.

#### Default

```ts
"immutable-storage"
```

***

### gasBudget?

> `optional` **gasBudget**: `number`

The gas budget to use for transactions.

#### Default

```ts
1_000_000_000
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
