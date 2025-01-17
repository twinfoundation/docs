# Interface: IIotaRebasedConfig

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
