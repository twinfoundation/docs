# Interface: IVaultConnector

Interface describing a vault securely storing data.

## Extends

- `IComponent`

## Methods

### createKey()

> **createKey**(`name`, `type`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Generate a new key and store it in the vault.

#### Parameters

##### name

`string`

The name of the key to generate and store in the vault.

##### type

[`VaultKeyType`](../type-aliases/VaultKeyType.md)

The type of key to create.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The public key for the key pair.

***

### addKey()

> **addKey**(`name`, `type`, `privateKey`, `publicKey`?): `Promise`\<`void`\>

Add an existing key to the vault.

#### Parameters

##### name

`string`

The name of the key to add to the vault.

##### type

[`VaultKeyType`](../type-aliases/VaultKeyType.md)

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

***

### getKey()

> **getKey**(`name`): `Promise`\<\{ `type`: [`VaultKeyType`](../type-aliases/VaultKeyType.md); `privateKey`: `Uint8Array`; `publicKey`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Get a key from the vault.

#### Parameters

##### name

`string`

The name of the key to get from the vault.

#### Returns

`Promise`\<\{ `type`: [`VaultKeyType`](../type-aliases/VaultKeyType.md); `privateKey`: `Uint8Array`; `publicKey`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

The key, publicKey can be undefined if key is symmetric.

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

***

### removeKey()

> **removeKey**(`name`): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

##### name

`string`

The name of the key to remove from the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

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

The data that was signed.

##### signature

`Uint8Array`

The signature to verify.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

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

The data to encrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The encrypted data.

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

The data to decrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The decrypted data.

***

### setSecret()

> **setSecret**\<`T`\>(`name`, `data`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type Parameters

• **T**

#### Parameters

##### name

`string`

The name of the secret in the vault to set.

##### data

`T`

The secret to add to the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getSecret()

> **getSecret**\<`T`\>(`name`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type Parameters

• **T**

#### Parameters

##### name

`string`

The name of the secret in the vault to get.

#### Returns

`Promise`\<`T`\>

The secret from the vault.

#### Throws

Error if the secret is not found.

***

### removeSecret()

> **removeSecret**(`name`): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

##### name

`string`

The name of the secret in the vault to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the secret is not found.
