# Interface: IIotaIdentityConnectorConfig

Configuration for the IOTA Identity Connector.

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

### addressIndex?

> `optional` **addressIndex**: `number`

The address index of the account to use for storing identities.

#### Default

```ts
1
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

### inclusionTimeoutSeconds?

> `optional` **inclusionTimeoutSeconds**: `number`

The length of time to wait for the inclusion of a transaction in seconds.

#### Default

```ts
60
```
