# Interface: IEntityStorageWalletConnectorConfig

Configuration for the Entity Storage Wallet Connector.

## Properties

### walletMnemonicId?

> `optional` **walletMnemonicId**: `string`

The id of the entry in the vault containing the wallet mnemonic.

***

### coinType?

> `optional` **coinType**: `number`

The coin type.

#### Default

```ts
9999
```

***

### bech32Hrp?

> `optional` **bech32Hrp**: `string`

The bech32 human readable part for the addresses.

#### Default

```ts
ent
```
