# Interface: IIotaRebasedImmutableStorageConnectorConfig

Configuration interface for IOTA Rebased ImmutableStorageConnector.

## Extends

- `IIotaRebasedConfig`

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

### vaultMnemonicId?

> `optional` **vaultMnemonicId**: `string`

The vault mnemonic identifier.

#### Default

```ts
"mnemonic"
```

#### Overrides

`IIotaRebasedConfig.vaultMnemonicId`
