# Interface: IIotaConfig

Configuration for IOTA.

## Properties

### clientOptions

> **clientOptions**: `NetworkOrTransport`

The configuration for the client.

***

### network

> **network**: `string`

The network the operations are being performed on.

***

### vaultMnemonicId?

> `optional` **vaultMnemonicId**: `string`

The id of the entry in the vault containing the mnemonic.

#### Default

```ts
mnemonic
```

***

### vaultSeedId?

> `optional` **vaultSeedId**: `string`

The id of the entry in the vault containing the seed.

#### Default

```ts
seed
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

### maxAddressScanRange?

> `optional` **maxAddressScanRange**: `number`

The maximum range to scan for addresses.

#### Default

```ts
1000
```

***

### inclusionTimeoutSeconds?

> `optional` **inclusionTimeoutSeconds**: `number`

The length of time to wait for the inclusion of a transaction in seconds.

#### Default

```ts
60
```

***

### gasStation?

> `optional` **gasStation**: [`IGasStationConfig`](IGasStationConfig.md)

Gas station configuration for sponsored transactions.
If provided, transactions will be processed through the gas station.

***

### gasBudget?

> `optional` **gasBudget**: `number`

The default gas budget for all transactions (including sponsored and direct).

#### Default

```ts
50000000
```
