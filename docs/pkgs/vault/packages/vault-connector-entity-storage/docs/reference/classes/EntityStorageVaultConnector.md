# Class: EntityStorageVaultConnector

Class for performing vault operations in entity storage.

## Implements

- `IVaultConnector`

## Constructors

### new EntityStorageVaultConnector()

> **new EntityStorageVaultConnector**(`options`?): [`EntityStorageVaultConnector`](EntityStorageVaultConnector.md)

Create a new instance of EntityStorageVaultConnector.

#### Parameters

##### options?

[`IEntityStorageVaultConnectorConstructorOptions`](../interfaces/IEntityStorageVaultConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`EntityStorageVaultConnector`](EntityStorageVaultConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the vault connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IVaultConnector.CLASS_NAME`

## Methods

### createKey()

> **createKey**(`name`, `type`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Generate a new key and store it in the vault.

#### Parameters

##### name

`string`

The name of the key to generate and store in the vault.

##### type

`VaultKeyType`

The type of key to create.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The public key for the key pair.

#### Implementation of

`IVaultConnector.createKey`

***

### addKey()

> **addKey**(`name`, `type`, `privateKey`, `publicKey`?): `Promise`\<`void`\>

Add an existing key to the vault.

#### Parameters

##### name

`string`

The name of the key to add to the vault.

##### type

`VaultKeyType`

The type of key to add.

##### privateKey

`Uint8Array`

The private key.

##### publicKey?

`Uint8Array`\<`ArrayBufferLike`\>

The public key, can be undefined if the key type is symmetric.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.addKey`

***

### getKey()

> **getKey**(`name`): `Promise`\<\{ `type`: `VaultKeyType`; `privateKey`: `Uint8Array`; `publicKey`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Get a key from the vault.

#### Parameters

##### name

`string`

The name of the key to get from the vault.

#### Returns

`Promise`\<\{ `type`: `VaultKeyType`; `privateKey`: `Uint8Array`; `publicKey`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

The key, publicKey can be undefined if key is symmetric.

#### Implementation of

`IVaultConnector.getKey`

***

### renameKey()

> **renameKey**(`name`, `newName`): `Promise`\<`void`\>

Rename a key in the vault.

#### Parameters

##### name

`string`

The name of the key to rename.

##### newName

`string`

The new name of the key.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.renameKey`

***

### removeKey()

> **removeKey**(`name`): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

##### name

`string`

The name of the key to create in the value.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.removeKey`

***

### sign()

> **sign**(`name`, `data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Sign the data using a key in the vault.

#### Parameters

##### name

`string`

The name of the key to use for signing.

##### data

`Uint8Array`

The data to sign.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The signature for the data.

#### Implementation of

`IVaultConnector.sign`

***

### verify()

> **verify**(`name`, `data`, `signature`): `Promise`\<`boolean`\>

Verify the signature of the data using a key in the vault.

#### Parameters

##### name

`string`

The name of the key to use for verification.

##### data

`Uint8Array`

The data that was signed in base64.

##### signature

`Uint8Array`

The signature to verify in base64.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

#### Implementation of

`IVaultConnector.verify`

***

### encrypt()

> **encrypt**(`name`, `encryptionType`, `data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Encrypt the data using a key in the vault.

#### Parameters

##### name

`string`

The name of the key to use for encryption.

##### encryptionType

`0`

The type of encryption to use.

##### data

`Uint8Array`

The data to encrypt in base64.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The encrypted data in base64.

#### Implementation of

`IVaultConnector.encrypt`

***

### decrypt()

> **decrypt**(`name`, `encryptionType`, `encryptedData`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Decrypt the data using a key in the vault.

#### Parameters

##### name

`string`

The name of the key to use for decryption.

##### encryptionType

`0`

The type of encryption to use.

##### encryptedData

`Uint8Array`

The data to decrypt in base64.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The decrypted data in base64.

#### Implementation of

`IVaultConnector.decrypt`

***

### setSecret()

> **setSecret**\<`T`\>(`name`, `item`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type Parameters

• **T**

#### Parameters

##### name

`string`

The name of the item in the vault to set.

##### item

`T`

The item to add to the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.setSecret`

***

### getSecret()

> **getSecret**\<`T`\>(`name`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type Parameters

• **T**

#### Parameters

##### name

`string`

The name of the item in the vault to get.

#### Returns

`Promise`\<`T`\>

The item from the vault.

#### Throws

Error if the item is not found.

#### Implementation of

`IVaultConnector.getSecret`

***

### removeSecret()

> **removeSecret**(`name`): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

##### name

`string`

The name of the item in the vault to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the item is not found.

#### Implementation of

`IVaultConnector.removeSecret`
