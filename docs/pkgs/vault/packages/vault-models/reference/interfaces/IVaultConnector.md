# Interface: IVaultConnector

Interface describing a vault securely storing data.

## Extends

- `IService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### createKey()

> **createKey**(`name`, `type`, `requestContext`?): `Promise`\<`Uint8Array`\>

Create a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to create in the vault.

• **type**: [`VaultKeyType`](../type-aliases/VaultKeyType.md)

The type of key to create.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`Uint8Array`\>

The public key for the key pair.

***

### addKey()

> **addKey**(`name`, `type`, `privateKey`, `publicKey`, `requestContext`?): `Promise`\<`void`\>

Add a key to the vault.

#### Parameters

• **name**: `string`

The name of the key to add to the vault.

• **type**: [`VaultKeyType`](../type-aliases/VaultKeyType.md)

The type of key to add.

• **privateKey**: `Uint8Array`

The private key.

• **publicKey**: `Uint8Array`

The public key.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getKey()

> **getKey**(`name`, `requestContext`?): `Promise`\<`object`\>

Get a key from the vault.

#### Parameters

• **name**: `string`

The name of the key to get from the vault.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The key.

##### type

> **type**: [`VaultKeyType`](../type-aliases/VaultKeyType.md)

The type of the key e.g. Ed25519, Secp256k1.

##### privateKey

> **privateKey**: `Uint8Array`

The private key.

##### publicKey

> **publicKey**: `Uint8Array`

The public key.

***

### renameKey()

> **renameKey**(`name`, `newName`, `requestContext`?): `Promise`\<`void`\>

Rename a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to rename.

• **newName**: `string`

The new name of the key.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### removeKey()

> **removeKey**(`name`, `requestContext`?): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

• **name**: `string`

The name of the key to remove from the vault.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### sign()

> **sign**(`name`, `data`, `requestContext`?): `Promise`\<`Uint8Array`\>

Sign the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for signing.

• **data**: `Uint8Array`

The data to sign.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`Uint8Array`\>

The signature for the data.

***

### verify()

> **verify**(`name`, `data`, `signature`, `requestContext`?): `Promise`\<`boolean`\>

Verify the signature of the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for verification.

• **data**: `Uint8Array`

The data that was signed.

• **signature**: `Uint8Array`

The signature to verify.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

***

### encrypt()

> **encrypt**(`name`, `encryptionType`, `data`, `requestContext`?): `Promise`\<`Uint8Array`\>

Encrypt the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for encryption.

• **encryptionType**: `0`

The type of encryption to use.

• **data**: `Uint8Array`

The data to encrypt.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`Uint8Array`\>

The encrypted data.

***

### decrypt()

> **decrypt**(`name`, `encryptionType`, `encryptedData`, `requestContext`?): `Promise`\<`Uint8Array`\>

Decrypt the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for decryption.

• **encryptionType**: `0`

The type of encryption to use.

• **encryptedData**: `Uint8Array`

The data to decrypt.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`Uint8Array`\>

The decrypted data.

***

### setSecret()

> **setSecret**\<`T`\>(`name`, `data`, `requestContext`?): `Promise`\<`void`\>

Store a secret in the vault.

#### Type parameters

• **T**

#### Parameters

• **name**: `string`

The name of the secret in the vault to set.

• **data**: `T`

The secret to add to the vault.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getSecret()

> **getSecret**\<`T`\>(`name`, `requestContext`?): `Promise`\<`T`\>

Get a secret from the vault.

#### Type parameters

• **T**

#### Parameters

• **name**: `string`

The name of the secret in the vault to get.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`T`\>

The secret from the vault.

#### Throws

Error if the secret is not found.

***

### removeSecret()

> **removeSecret**(`name`, `requestContext`?): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

• **name**: `string`

The name of the secret in the vault to remove.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the secret is not found.
