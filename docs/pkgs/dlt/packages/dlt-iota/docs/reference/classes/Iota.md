# Class: Iota

Class for performing operations on IOTA.

## Constructors

### new Iota()

> **new Iota**(): [`Iota`](Iota.md)

#### Returns

[`Iota`](Iota.md)

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

> `readonly` `static` **DEFAULT\_COIN\_TYPE**: `number` = `4218`

Default coin type.

***

### DEFAULT\_SCAN\_RANGE

> `readonly` `static` **DEFAULT\_SCAN\_RANGE**: `number` = `1000`

Default scan range.

## Methods

### createClient()

> `static` **createClient**(`config`): `IotaClient`

Create a new IOTA client.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration.

#### Returns

`IotaClient`

The client instance.

***

### populateConfig()

> `static` **populateConfig**(`config`): `void`

Create configuration using defaults where necessary.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration to populate.

#### Returns

`void`

***

### getAddresses()

> `static` **getAddresses**(`seed`, `coinType`, `accountIndex`, `startAddressIndex`, `count`, `isInternal`?): `string`[]

Get addresses for the identity.

#### Parameters

##### seed

`Uint8Array`

The seed to use for generating addresses.

##### coinType

`number`

The coin type to use.

##### accountIndex

`number`

The account index to get the addresses for.

##### startAddressIndex

`number`

The start index for the addresses.

##### count

`number`

The number of addresses to generate.

##### isInternal?

`boolean`

Whether the addresses are internal.

#### Returns

`string`[]

The list of addresses.

***

### getKeyPair()

> `static` **getKeyPair**(`seed`, `coinType`, `accountIndex`, `addressIndex`, `isInternal`?): `object`

Get a key pair for the specified index.

#### Parameters

##### seed

`Uint8Array`

The seed to use for generating the key pair.

##### coinType

`number`

The coin type to use.

##### accountIndex

`number`

The account index to get the key pair for.

##### addressIndex

`number`

The address index to get the key pair for.

##### isInternal?

`boolean`

Whether the address is internal.

#### Returns

`object`

The key pair containing private key and public key.

##### privateKey

> **privateKey**: `Uint8Array`

##### publicKey

> **publicKey**: `Uint8Array`

***

### prepareAndPostTransaction()

> `static` **prepareAndPostTransaction**(`config`, `vaultConnector`, `identity`, `client`, `options`): `Promise`\<\{ `digest`: `string`; \}\>

Prepare and post a transaction.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration.

##### vaultConnector

`IVaultConnector`

The vault connector.

##### identity

`string`

The identity of the user to access the vault keys.

##### client

`IotaClient`

The client instance.

##### options

The transaction options.

###### source

`string`

The source address.

###### amount

`bigint`

The amount to transfer.

###### recipient

`string`

The recipient address.

#### Returns

`Promise`\<\{ `digest`: `string`; \}\>

The transaction result.

***

### prepareAndPostNftTransaction()

> `static` **prepareAndPostNftTransaction**(`config`, `vaultConnector`, `identity`, `client`, `options`): `Promise`\<[`IIotaNftTransactionResponse`](../interfaces/IIotaNftTransactionResponse.md)\>

Prepare and post an NFT transaction.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration.

##### vaultConnector

`IVaultConnector`

The vault connector.

##### identity

`string`

The identity of the user to access the vault keys.

##### client

`IotaClient`

The client instance.

##### options

[`IIotaNftTransactionOptions`](../interfaces/IIotaNftTransactionOptions.md)

The NFT transaction options.

#### Returns

`Promise`\<[`IIotaNftTransactionResponse`](../interfaces/IIotaNftTransactionResponse.md)\>

The transaction response.

***

### prepareAndPostStorageTransaction()

> `static` **prepareAndPostStorageTransaction**(`config`, `vaultConnector`, `identity`, `client`, `options`): `Promise`\<`IotaTransactionBlockResponse`\>

Prepare and post a storage transaction.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

The configuration.

##### vaultConnector

`IVaultConnector`

The vault connector.

##### identity

`string`

The identity of the user to access the vault keys.

##### client

`IotaClient`

The client instance.

##### options

[`IIotaNftTransactionOptions`](../interfaces/IIotaNftTransactionOptions.md)

The storage transaction options.

#### Returns

`Promise`\<`IotaTransactionBlockResponse`\>

The transaction response.

***

### getSeed()

> `static` **getSeed**(`config`, `vaultConnector`, `identity`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Get the seed from the vault.

#### Parameters

##### config

[`IIotaConfig`](../interfaces/IIotaConfig.md)

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

### findAddress()

> `static` **findAddress**(`maxScanRange`, `coinType`, `seed`, `address`): `object`

Find the address in the seed.

#### Parameters

##### maxScanRange

`number`

The maximum range to scan.

##### coinType

`number`

The coin type to use.

##### seed

`Uint8Array`

The seed to use.

##### address

`string`

The address to find.

#### Returns

`object`

The address key pair.

##### address

> **address**: `string`

##### privateKey

> **privateKey**: `Uint8Array`

##### publicKey

> **publicKey**: `Uint8Array`

#### Throws

Error if the address is not found.

***

### extractPayloadError()

> `static` **extractPayloadError**(`error`): `IError`

Extract error from SDK payload.
Errors from the IOTA SDK are usually not JSON strings but objects.

#### Parameters

##### error

`unknown`

The error to extract.

#### Returns

`IError`

The extracted error.

***

### buildMnemonicKey()

> `static` **buildMnemonicKey**(`identity`, `vaultMnemonicId`?): `string`

Get the key for storing the mnemonic.

#### Parameters

##### identity

`string`

The identity to use.

##### vaultMnemonicId?

`string`

The mnemonic ID to use.

#### Returns

`string`

The mnemonic key.

***

### buildSeedKey()

> `static` **buildSeedKey**(`identity`, `vaultSeedId`?): `string`

Get the key for storing the seed.

#### Parameters

##### identity

`string`

The identity to use.

##### vaultSeedId?

`string`

The seed ID to use.

#### Returns

`string`

The seed key.

***

### packageExistsOnNetwork()

> `static` **packageExistsOnNetwork**(`client`, `packageId`): `Promise`\<`boolean`\>

Check if the package exists on the network.

#### Parameters

##### client

`IotaClient`

The client to use.

##### packageId

`string`

The package ID to check.

#### Returns

`Promise`\<`boolean`\>

True if the package exists, false otherwise.

***

### dryRunTransaction()

> `static` **dryRunTransaction**(`client`, `logging`, `className`, `txb`, `sender`, `operation`): `Promise`\<[`IIotaDryRun`](../interfaces/IIotaDryRun.md)\>

Dry run a transaction and log the results.

#### Parameters

##### client

`IotaClient`

The IOTA client.

##### logging

The logging connector.

`undefined` | `ILoggingConnector`

##### className

`string`

The class name for logging.

##### txb

`Transaction`

The transaction to dry run.

##### sender

`string`

The sender address.

##### operation

`string`

The operation to log.

#### Returns

`Promise`\<[`IIotaDryRun`](../interfaces/IIotaDryRun.md)\>

void.
