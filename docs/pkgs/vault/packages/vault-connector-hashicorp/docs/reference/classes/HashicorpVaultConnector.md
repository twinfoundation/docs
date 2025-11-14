# Class: HashicorpVaultConnector

Class for performing vault operations in entity storage.

## Implements

- `IVaultConnector`

## Constructors

### Constructor

> **new HashicorpVaultConnector**(`options`): `HashicorpVaultConnector`

Create a new instance of HashicorpVaultConnector.

#### Parameters

##### options

[`IHashicorpVaultConnectorConstructorOptions`](../interfaces/IHashicorpVaultConnectorConstructorOptions.md)

The options for the vault connector.

#### Returns

`HashicorpVaultConnector`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

***

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"hashicorp"`

The namespace supported by the vault connector.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IVaultConnector.className`

***

### bootstrap()

> **bootstrap**(`nodeLoggingComponentType?`): `Promise`\<`boolean`\>

Bootstrap the vault connector and ensure connectivity.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Implementation of

`IVaultConnector.bootstrap`

***

### setSecret()

> **setSecret**\<`T`\>(`name`, `data`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

The name of the item in the vault to set.

##### data

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

##### T

`T`

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

***

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

> **addKey**(`name`, `type`, `privateKey`, `publicKey?`): `Promise`\<`void`\>

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

> **getKey**(`name`): `Promise`\<\{ `type`: `VaultKeyType`; `privateKey`: `Uint8Array`; `publicKey?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Get a key from the vault.

#### Parameters

##### name

`string`

The name of the key to get.

#### Returns

`Promise`\<\{ `type`: `VaultKeyType`; `privateKey`: `Uint8Array`; `publicKey?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

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

The name of the key to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVaultConnector.removeKey`

***

### sign()

> **sign**(`name`, `data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Sign data.

#### Parameters

##### name

`string`

The name of the key to use.

##### data

`Uint8Array`

The data to sign.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The signature.

#### Implementation of

`IVaultConnector.sign`

***

### verify()

> **verify**(`name`, `data`, `signature`): `Promise`\<`boolean`\>

Verify a signature.

#### Parameters

##### name

`string`

The name of the key to use.

##### data

`Uint8Array`

The data to verify.

##### signature

`Uint8Array`

The signature to verify.

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.

#### Implementation of

`IVaultConnector.verify`

***

### encrypt()

> **encrypt**(`name`, `encryptionType`, `data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Encrypt data.

#### Parameters

##### name

`string`

The name of the key to use.

##### encryptionType

`0`

The type of encryption to use.

##### data

`Uint8Array`

The data to encrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The encrypted data.

#### Implementation of

`IVaultConnector.encrypt`

***

### decrypt()

> **decrypt**(`name`, `encryptionType`, `encryptedData`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Decrypt data.

#### Parameters

##### name

`string`

The name of the key to use.

##### encryptionType

`0`

The type of encryption to use.

##### encryptedData

`Uint8Array`

The encrypted data to decrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The decrypted data.

#### Implementation of

`IVaultConnector.decrypt`

***

### getSecretVersions()

> **getSecretVersions**(`name`): `Promise`\<`number`[]\>

Get the versions of a secret.

#### Parameters

##### name

`string`

The name of the secret.

#### Returns

`Promise`\<`number`[]\>

The versions of the secret.

#### Throws

Error if the secret is not found.

***

### updateKeyConfig()

> **updateKeyConfig**(`name`, `deletionAllowed?`, `exportable?`): `Promise`\<`void`\>

Update the configuration of a key.

#### Parameters

##### name

`string`

The name of the key to update.

##### deletionAllowed?

`boolean`

Whether the key can be deleted.

##### exportable?

`boolean`

Whether the key can be exported.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### backupKey()

> **backupKey**(`name`): `Promise`\<`string`\>

Backup a key from the vault.

#### Parameters

##### name

`string`

The name of the key to backup.

#### Returns

`Promise`\<`string`\>

The private key as a Uint8Array.

#### Throws

Error if the key cannot be exported or found.

***

### restoreKey()

> **restoreKey**(`name`, `backup`): `Promise`\<`void`\>

Restore a key to the vault.

#### Parameters

##### name

`string`

The name of the key to restore.

##### backup

`string`

The backup of the key.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the key cannot be restored.

***

### importKey()

> **importKey**(`name`, `type`, `privateKeyPem`): `Promise`\<`void`\>

Import a key to the vault.

#### Parameters

##### name

`string`

The name of the key to import.

##### type

`string`

The type of key to import, e.g. "ed25519", etc.

##### privateKeyPem

`string`

The PEM bundle of the key to import.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the key cannot be imported.

***

### exportKey()

> **exportKey**(`name`, `keyPath`, `version?`): `Promise`\<\{ `type`: `VaultKeyType`; `key`: `Uint8Array`; `name`: `string`; \}\>

Export the key from the vault.

#### Parameters

##### name

`string`

The name of the key.

##### keyPath

The path of the key. Defaults to "signing-key".

`"signing-key"` | `"encryption-key"` | `"public-key"`

##### version?

`string`

The version of the key. If omitted, all versions of the key will be returned.

#### Returns

`Promise`\<\{ `type`: `VaultKeyType`; `key`: `Uint8Array`; `name`: `string`; \}\>

The key details.

#### Throws

Error if the key cannot be exported or found.

***

### getKeyDeleteConfiguration()

> **getKeyDeleteConfiguration**(`name`): `Promise`\<`boolean`\>

Get the key configuration.

#### Parameters

##### name

`string`

The name of the key to get the configuration for.

#### Returns

`Promise`\<`boolean`\>

True if the key can be deleted.
