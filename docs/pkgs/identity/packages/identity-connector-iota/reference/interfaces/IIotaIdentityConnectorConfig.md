# Interface: IIotaIdentityConnectorConfig

Configuration for the IOTA Identity Connector.

## Extends

- `IIotaConfig`

## Properties

### clientOptions

> **clientOptions**: `IClientOptions`

The configuration for the client.

#### Inherited from

`IIotaConfig.clientOptions`

***

### vaultMnemonicId?

> `optional` **vaultMnemonicId**: `string`

The id of the entry in the vault containing the mnemonic.

#### Default

```ts
mnemonic
```

#### Inherited from

`IIotaConfig.vaultMnemonicId`

***

### vaultSeedId?

> `optional` **vaultSeedId**: `string`

The id of the entry in the vault containing the seed.

#### Default

```ts
seed
```

#### Inherited from

`IIotaConfig.vaultSeedId`

***

### coinType?

> `optional` **coinType**: `number`

The coin type.

#### Default

```ts
IOTA 4218
```

#### Inherited from

`IIotaConfig.coinType`

***

### bech32Hrp?

> `optional` **bech32Hrp**: `string`

The bech32 human readable part for the addresses.

#### Default

```ts
iota
```

#### Inherited from

`IIotaConfig.bech32Hrp`

***

### inclusionTimeoutSeconds?

> `optional` **inclusionTimeoutSeconds**: `number`

The length of time to wait for the inclusion of a transaction in seconds.

#### Default

```ts
60
```

#### Inherited from

`IIotaConfig.inclusionTimeoutSeconds`

***

### walletAddressIndex?

> `optional` **walletAddressIndex**: `number`

The wallet address index to use for funding and controlling the identity.

#### Default

```ts
0
```
