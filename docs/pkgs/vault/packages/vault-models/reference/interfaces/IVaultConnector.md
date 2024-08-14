# Interface: IVaultConnector

Interface describing a vault securely storing data.

## Extends

- `IComponent`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the component.

#### Inherited from

`IComponent.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Inherited from

`IComponent.bootstrap`

***

### start()?

> `optional` **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.start`

***

### stop()?

> `optional` **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.stop`

***

### createKey()

> **createKey**(`name`, `type`): `Promise`\<`Uint8Array`\>

Create a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to create in the vault.

• **type**: [`VaultKeyType`](../type-aliases/VaultKeyType.md)

The type of key to create.

#### Returns

`Promise`\<`Uint8Array`\>

The public key for the key pair.

***

### addKey()

> **addKey**(`name`, `type`, `privateKey`, `publicKey`): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getKey()

> **getKey**(`name`): `Promise`\<`object`\>

Get a key from the vault.

#### Parameters

• **name**: `string`

The name of the key to get from the vault.

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

> **renameKey**(`name`, `newName`): `Promise`\<`void`\>

Rename a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to rename.

• **newName**: `string`

The new name of the key.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### removeKey()

> **removeKey**(`name`): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

• **name**: `string`

The name of the key to remove from the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### sign()

> **sign**(`name`, `data`): `Promise`\<`Uint8Array`\>

Sign the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for signing.

• **data**: `Uint8Array`

The data to sign.

#### Returns

`Promise`\<`Uint8Array`\>

The signature for the data.

***

### verify()

> **verify**(`name`, `data`, `signature`): `Promise`\<`boolean`\>

Verify the signature of the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for verification.

• **data**: `Uint8Array`

The data that was signed.

• **signature**: `Uint8Array`

The signature to verify.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

***

### encrypt()

> **encrypt**(`name`, `encryptionType`, `data`): `Promise`\<`Uint8Array`\>

Encrypt the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for encryption.

• **encryptionType**: `0`

The type of encryption to use.

• **data**: `Uint8Array`

The data to encrypt.

#### Returns

`Promise`\<`Uint8Array`\>

The encrypted data.

***

### decrypt()

> **decrypt**(`name`, `encryptionType`, `encryptedData`): `Promise`\<`Uint8Array`\>

Decrypt the data using a key in the vault.

#### Parameters

• **name**: `string`

The name of the key to use for decryption.

• **encryptionType**: `0`

The type of encryption to use.

• **encryptedData**: `Uint8Array`

The data to decrypt.

#### Returns

`Promise`\<`Uint8Array`\>

The decrypted data.

***

### setSecret()

> **setSecret**\<`T`\>(`name`, `data`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type parameters

• **T**

#### Parameters

• **name**: `string`

The name of the secret in the vault to set.

• **data**: `T`

The secret to add to the vault.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getSecret()

> **getSecret**\<`T`\>(`name`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type parameters

• **T**

#### Parameters

• **name**: `string`

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

• **name**: `string`

The name of the secret in the vault to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Error if the secret is not found.
