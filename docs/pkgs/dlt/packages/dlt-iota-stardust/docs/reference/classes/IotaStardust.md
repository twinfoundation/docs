# Class: IotaStardust

Class for performing operations on IOTA.

## Constructors

### new IotaStardust()

> **new IotaStardust**(): [`IotaStardust`](IotaStardust.md)

#### Returns

[`IotaStardust`](IotaStardust.md)

## Properties

### DEFAULT\_MNEMONIC\_SECRET\_NAME

> `readonly` `static` **DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"mnemonic"`

Default name for the mnemonic secret.

***

### DEFAULT\_SEED\_SECRET\_NAME

> `readonly` `static` **DEFAULT\_SEED\_SECRET\_NAME**: `string` = `"seed"`

Default name for the seed secret.

***

### DEFAULT\_COIN\_TYPE

> `readonly` `static` **DEFAULT\_COIN\_TYPE**: `number` = `CoinType.IOTA`

Default coin type.

***

### DEFAULT\_BECH32\_HRP

> `readonly` `static` **DEFAULT\_BECH32\_HRP**: `string` = `"iota"`

Default bech32 hrp.

***

### DEFAULT\_INCLUSION\_TIMEOUT

> `readonly` `static` **DEFAULT\_INCLUSION\_TIMEOUT**: `number` = `60`

The default length of time to wait for the inclusion of a transaction in seconds.

## Methods

### populateConfig()

> `static` **populateConfig**(`config`): `void`

Create configuration using defaults where necessary.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to populate.

#### Returns

`void`

***

### getAddresses()

> `static` **getAddresses**(`config`, `vaultConnector`, `identity`, `accountIndex`, `startAddressIndex`, `count`): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to use.

##### vaultConnector

`IVaultConnector`

The vault connector to use.

##### identity

`string`

The identity of the user to access the vault keys.

##### accountIndex

`number`

The account index to get the addresses for.

##### startAddressIndex

`number`

The start index for the addresses.

##### count

`number`

The number of addresses to generate.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

***

### prepareAndPostTransaction()

> `static` **prepareAndPostTransaction**(`config`, `vaultConnector`, `identity`, `client`, `options`): `Promise`\<\{ `blockId`: `string`; `block`: `Block`; \}\>

Prepare a transaction for sending, post and wait for inclusion.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to use.

##### vaultConnector

`IVaultConnector`

The vault connector to use.

##### identity

`string`

The identity of the user to access the vault keys.

##### client

`Client`

The client to use.

##### options

`IBuildBlockOptions`

The options for the transaction.

#### Returns

`Promise`\<\{ `blockId`: `string`; `block`: `Block`; \}\>

The block id and block.

***

### getSeed()

> `static` **getSeed**(`config`, `vaultConnector`, `identity`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Get the seed from the vault.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to use.

##### vaultConnector

`IVaultConnector`

The vault connector to use.

##### identity

`string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The seed.

***

### extractPayloadError()

> `static` **extractPayloadError**(`error`): `IError`

Extract error from SDK payload.

#### Parameters

##### error

`unknown`

The error to extract.

#### Returns

`IError`

The extracted error.

***

### buildMnemonicKey()

> `static` **buildMnemonicKey**(`config`, `identity`): `string`

Build the key name to access the mnemonic in the vault.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to use.

##### identity

`string`

The identity of the user to access the vault keys.

#### Returns

`string`

The vault key.

***

### buildSeedKey()

> `static` **buildSeedKey**(`config`, `identity`): `string`

Build the key name to access the seed in the vault.

#### Parameters

##### config

[`IIotaStardustConfig`](../interfaces/IIotaStardustConfig.md)

The configuration to use.

##### identity

`string`

The identity of the user to access the vault keys.

#### Returns

`string`

The vault key.
