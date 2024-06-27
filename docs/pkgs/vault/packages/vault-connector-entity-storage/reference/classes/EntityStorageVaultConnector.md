# Class: EntityStorageVaultConnector

Class for performing vault operations in entity storage.

## Implements

- `IVaultConnector`

## Constructors

### new EntityStorageVaultConnector()

> **new EntityStorageVaultConnector**(`options`?): [`EntityStorageVaultConnector`](EntityStorageVaultConnector.md)

Create a new instance of EntityStorageVaultConnector.

#### Parameters

• **options?**

The options for the connector.

• **options.vaultKeyEntityStorageType?**: `string`

The vault key entity storage connector type, defaults to "vault-key".

• **options.vaultSecretEntityStorageType?**: `string`

The vault secret entity storage connector type, defaults to "vault-secret".

#### Returns

[`EntityStorageVaultConnector`](EntityStorageVaultConnector.md)

## Methods

### createKey()

> **createKey**(`requestContext`, `name`, `type`): `Promise`\<`Uint8Array`\>

Create a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to create in the vault.

• **type**: `VaultKeyType`

The type of key to create.

#### Returns

`Promise`\<`Uint8Array`\>

The public key for the key pair.

#### Implementation of

`IVaultConnector.createKey`

***

### addKey()

> **addKey**(`requestContext`, `name`, `type`, `privateKey`, `publicKey`): `Promise`\<`void`\>

Add a key to the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to add to the vault.

• **type**: `VaultKeyType`

The type of key to add.

• **privateKey**: `Uint8Array`

The private key.

• **publicKey**: `Uint8Array`

The public key.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.addKey`

***

### getKey()

> **getKey**(`requestContext`, `name`): `Promise`\<`object`\>

Get a key from the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to get from the vault.

#### Returns

`Promise`\<`object`\>

The key.

##### type

> **type**: `VaultKeyType`

The type of the key e.g. Ed25519, Secp256k1.

##### privateKey

> **privateKey**: `Uint8Array`

The private key.

##### publicKey

> **publicKey**: `Uint8Array`

The public key.

#### Implementation of

`IVaultConnector.getKey`

***

### renameKey()

> **renameKey**(`requestContext`, `name`, `newName`): `Promise`\<`void`\>

Rename a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to rename.

• **newName**: `string`

The new name of the key.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.renameKey`

***

### removeKey()

> **removeKey**(`requestContext`, `name`): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to create in the value.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.removeKey`

***

### sign()

> **sign**(`requestContext`, `name`, `data`): `Promise`\<`Uint8Array`\>

Sign the data using a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to use for signing.

• **data**: `Uint8Array`

The data to sign.

#### Returns

`Promise`\<`Uint8Array`\>

The signature for the data.

#### Implementation of

`IVaultConnector.sign`

***

### verify()

> **verify**(`requestContext`, `name`, `data`, `signature`): `Promise`\<`boolean`\>

Verify the signature of the data using a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to use for verification.

• **data**: `Uint8Array`

The data that was signed in base64.

• **signature**: `Uint8Array`

The signature to verify in base64.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

#### Implementation of

`IVaultConnector.verify`

***

### encrypt()

> **encrypt**(`requestContext`, `name`, `encryptionType`, `data`): `Promise`\<`Uint8Array`\>

Encrypt the data using a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to use for encryption.

• **encryptionType**: `0`

The type of encryption to use.

• **data**: `Uint8Array`

The data to encrypt in base64.

#### Returns

`Promise`\<`Uint8Array`\>

The encrypted data in base64.

#### Implementation of

`IVaultConnector.encrypt`

***

### decrypt()

> **decrypt**(`requestContext`, `name`, `encryptionType`, `encryptedData`): `Promise`\<`Uint8Array`\>

Decrypt the data using a key in the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the key to use for decryption.

• **encryptionType**: `0`

The type of encryption to use.

• **encryptedData**: `Uint8Array`

The data to decrypt in base64.

#### Returns

`Promise`\<`Uint8Array`\>

The decrypted data in base64.

#### Implementation of

`IVaultConnector.decrypt`

***

### setSecret()

> **setSecret**\<`T`\>(`requestContext`, `name`, `item`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type parameters

• **T**

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the item in the vault to set.

• **item**: `T`

The item to add to the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.setSecret`

***

### getSecret()

> **getSecret**\<`T`\>(`requestContext`, `name`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type parameters

• **T**

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the item in the vault to get.

#### Returns

`Promise`\<`T`\>

The item from the vault.

#### Implementation of

`IVaultConnector.getSecret`

#### Throws

Error if the item is not found.

***

### removeSecret()

> **removeSecret**(`requestContext`, `name`): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **name**: `string`

The name of the item in the vault to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.removeSecret`

#### Throws

Error if the item is not found.
