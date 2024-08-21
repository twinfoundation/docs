# Interface: IIotaImmutableStorageConnectorConfig

Configuration for the IOTA Immutable Storage connector.

## Properties

### clientOptions

> **clientOptions**: `IClientOptions`

The configuration for the client.

***

### vaultSeedId?

> `optional` **vaultSeedId**: `string`

The id of the entry in the vault containing the seed.

#### Default

```ts
seed
```

***

### vaultMnemonicId?

> `optional` **vaultMnemonicId**: `string`

The id of the entry in the vault containing the mnemonic.

#### Default

```ts
mnemonic
```

***

### coinType?

> `optional` **coinType**: `number`

The coin type.

#### Default

```ts
IOTA 4218
```

***

### walletAddressIndex?

> `optional` **walletAddressIndex**: `number`

The wallet address index to use to return fees for removed immutable items.

#### Default

```ts
0
```

***

### inclusionTimeoutSeconds?

> `optional` **inclusionTimeoutSeconds**: `number`

The length of time to wait for the inclusion of a transaction in seconds.

#### Default

```ts
60
```
