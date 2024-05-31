# Interface: IIotaWalletConnectorConfig

Configuration for the IOTA Wallet Connector.

## Properties

### clientOptions

> **clientOptions**: `IClientOptions`

The configuration for the client.

***

### walletMnemonicId?

> `optional` **walletMnemonicId**: `string`

The id of the entry in the vault containing the wallet mnemonic.

#### Default

```ts
wallet-mnemonic
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

### bech32Hrp?

> `optional` **bech32Hrp**: `string`

The bech32 human readable part for the addresses.

#### Default

```ts
iota
```

***

### inclusionTimeoutSeconds?

> `optional` **inclusionTimeoutSeconds**: `number`

The length of time to wait for the inclusion of a transaction in seconds.

#### Default

```ts
60
```
