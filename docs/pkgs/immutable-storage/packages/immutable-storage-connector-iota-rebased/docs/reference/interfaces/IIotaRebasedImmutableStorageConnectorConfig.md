# Interface: IIotaRebasedImmutableStorageConnectorConfig

Configuration interface for IOTA Rebased ImmutableStorageConnector.

## Extends

- `IIotaRebasedConfig`

## Properties

### clientOptions

> **clientOptions**: `NetworkOrTransport`

The configuration for the client.

#### Inherited from

`IIotaRebasedConfig.clientOptions`

***

### network

> **network**: `string`

The network the operations are being performed on.

#### Inherited from

`IIotaRebasedConfig.network`

***

### vaultMnemonicId?

> `optional` **vaultMnemonicId**: `string`

The id of the entry in the vault containing the mnemonic.

#### Default

```ts
mnemonic
```

#### Inherited from

`IIotaRebasedConfig.vaultMnemonicId`

***

### vaultSeedId?

> `optional` **vaultSeedId**: `string`

The id of the entry in the vault containing the seed.

#### Default

```ts
seed
```

#### Inherited from

`IIotaRebasedConfig.vaultSeedId`

***

### coinType?

> `optional` **coinType**: `number`

The coin type.

#### Default

```ts
IOTA 4218
```

#### Inherited from

`IIotaRebasedConfig.coinType`

***

### maxAddressScanRange?

> `optional` **maxAddressScanRange**: `number`

The maximum range to scan for addresses.

#### Default

```ts
1000
```

#### Inherited from

`IIotaRebasedConfig.maxAddressScanRange`

***

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
