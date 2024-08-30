# Class: Iota

Class for performing operations on IOTA.

## Constructors

### new Iota()

> **new Iota**(): [`Iota`](Iota.md)

#### Returns

[`Iota`](Iota.md)

## Properties

### DEFAULT\_MNEMONIC\_SECRET\_NAME

> `static` `readonly` **DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"mnemonic"`

Default name for the mnemonic secret.

***

### DEFAULT\_SEED\_SECRET\_NAME

> `static` `readonly` **DEFAULT\_SEED\_SECRET\_NAME**: `string` = `"seed"`

Default name for the seed secret.

***

### DEFAULT\_COIN\_TYPE

> `static` `readonly` **DEFAULT\_COIN\_TYPE**: `number` = `CoinType.IOTA`

Default coin type.

***

### DEFAULT\_BECH32\_HRP

> `static` `readonly` **DEFAULT\_BECH32\_HRP**: `string` = `"iota"`

Default bech32 hrp.

***

### DEFAULT\_INCLUSION\_TIMEOUT

> `static` `readonly` **DEFAULT\_INCLUSION\_TIMEOUT**: `number` = `60`

The default length of time to wait for the inclusion of a transaction in seconds.

## Methods

### populateConfig()

> `static` **populateConfig**(`config`): `void`

Create configuration using defaults where necessary.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to populate.

#### Returns

`void`

***

### getAddresses()

> `static` **getAddresses**(`config`, `vaultConnector`, `identity`, `accountIndex`, `startAddressIndex`, `count`): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to use.

• **vaultConnector**: `IVaultConnector`

The vault connector to use.

• **identity**: `string`

The identity of the user to access the vault keys.

• **accountIndex**: `number`

The account index to get the addresses for.

• **startAddressIndex**: `number`

The start index for the addresses.

• **count**: `number`

The number of addresses to generate.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

***

### prepareAndPostTransaction()

> `static` **prepareAndPostTransaction**(`config`, `vaultConnector`, `identity`, `client`, `options`): `Promise`\<`object`\>

Prepare a transaction for sending, post and wait for inclusion.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to use.

• **vaultConnector**: `IVaultConnector`

The vault connector to use.

• **identity**: `string`

The identity of the user to access the vault keys.

• **client**: `Client`

The client to use.

• **options**: `IBuildBlockOptions`

The options for the transaction.

#### Returns

`Promise`\<`object`\>

The block id and block.

##### blockId

> **blockId**: `string`

##### block

> **block**: `Block`

***

### getSeed()

> `static` **getSeed**(`config`, `vaultConnector`, `identity`): `Promise`\<`Uint8Array`\>

Get the seed from the vault.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to use.

• **vaultConnector**: `IVaultConnector`

The vault connector to use.

• **identity**: `string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`Uint8Array`\>

The seed.

***

### extractPayloadError()

> `static` **extractPayloadError**(`error`): `IError`

Extract error from SDK payload.

#### Parameters

• **error**: `unknown`

The error to extract.

#### Returns

`IError`

The extracted error.

***

### buildMnemonicKey()

> `static` **buildMnemonicKey**(`config`, `identity`): `string`

Build the key name to access the mnemonic in the vault.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to use.

• **identity**: `string`

The identity of the user to access the vault keys.

#### Returns

`string`

The vault key.

***

### buildSeedKey()

> `static` **buildSeedKey**(`config`, `identity`): `string`

Build the key name to access the seed in the vault.

#### Parameters

• **config**: [`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to use.

• **identity**: `string`

The identity of the user to access the vault keys.

#### Returns

`string`

The vault key.
