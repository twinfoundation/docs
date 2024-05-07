# Interface: IVaultConnector

Interface describing a vault securely storing data.

## Hierarchy

- `IService`

  ↳ **`IVaultConnector`**

## Methods

### addKey

▸ **addKey**(`requestContext`, `name`, `type`, `privateKey`, `publicKey`): `Promise`\<`void`\>

Add a key to the vault.

#### Parameters

| Name             | Type              | Description                              |
| :--------------- | :---------------- | :--------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.             |
| `name`           | `string`          | The name of the key to add to the vault. |
| `type`           | `"Ed25519"`       | The type of key to add.                  |
| `privateKey`     | `string`          | The private key in base64 format.        |
| `publicKey`      | `string`          | The public key in base64 format.         |

#### Returns

`Promise`\<`void`\>

Nothing.

---

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name             | Type              | Description                            |
| :--------------- | :---------------- | :------------------------------------- |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

---

### createKey

▸ **createKey**(`requestContext`, `name`, `type`): `Promise`\<`string`\>

Create a key in the vault.

#### Parameters

| Name             | Type              | Description                                 |
| :--------------- | :---------------- | :------------------------------------------ |
| `requestContext` | `IRequestContext` | The context for the request.                |
| `name`           | `string`          | The name of the key to create in the vault. |
| `type`           | `"Ed25519"`       | The type of key to create.                  |

#### Returns

`Promise`\<`string`\>

The public key for the key pair in base64.

---

### decrypt

▸ **decrypt**(`requestContext`, `name`, `encryptionType`, `encryptedData`): `Promise`\<`string`\>

Decrypt the data using a key in the vault.

#### Parameters

| Name             | Type                 | Description                                |
| :--------------- | :------------------- | :----------------------------------------- |
| `requestContext` | `IRequestContext`    | The context for the request.               |
| `name`           | `string`             | The name of the key to use for decryption. |
| `encryptionType` | `"ChaCha20Poly1305"` | The type of encryption to use.             |
| `encryptedData`  | `string`             | The data to decrypt in base64.             |

#### Returns

`Promise`\<`string`\>

The decrypted data in base64.

---

### encrypt

▸ **encrypt**(`requestContext`, `name`, `encryptionType`, `data`): `Promise`\<`string`\>

Encrypt the data using a key in the vault.

#### Parameters

| Name             | Type                 | Description                                |
| :--------------- | :------------------- | :----------------------------------------- |
| `requestContext` | `IRequestContext`    | The context for the request.               |
| `name`           | `string`             | The name of the key to use for encryption. |
| `encryptionType` | `"ChaCha20Poly1305"` | The type of encryption to use.             |
| `data`           | `string`             | The data to encrypt in base64 form.        |

#### Returns

`Promise`\<`string`\>

The encrypted data in base64.

---

### getKey

▸ **getKey**(`requestContext`, `name`): `Promise`\<\{ `privateKey`: `string` ; `publicKey`: `string` ; `type`: `"Ed25519"` }\>

Get a key from the vault.

#### Parameters

| Name             | Type              | Description                                |
| :--------------- | :---------------- | :----------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.               |
| `name`           | `string`          | The name of the key to get from the vault. |

#### Returns

`Promise`\<\{ `privateKey`: `string` ; `publicKey`: `string` ; `type`: `"Ed25519"` }\>

The key.

---

### getSecret

▸ **getSecret**\<`T`\>(`requestContext`, `name`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name             | Type              | Description                                 |
| :--------------- | :---------------- | :------------------------------------------ |
| `requestContext` | `IRequestContext` | The context for the request.                |
| `name`           | `string`          | The name of the secret in the vault to get. |

#### Returns

`Promise`\<`T`\>

The secret from the vault.

**`Throws`**

Error if the secret is not found.

---

### removeKey

▸ **removeKey**(`requestContext`, `name`): `Promise`\<`void`\>

Remove a key from the vault.

#### Parameters

| Name             | Type              | Description                                   |
| :--------------- | :---------------- | :-------------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.                  |
| `name`           | `string`          | The name of the key to remove from the vault. |

#### Returns

`Promise`\<`void`\>

Nothing.

---

### removeSecret

▸ **removeSecret**(`requestContext`, `name`): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

| Name             | Type              | Description                                    |
| :--------------- | :---------------- | :--------------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.                   |
| `name`           | `string`          | The name of the secret in the vault to remove. |

#### Returns

`Promise`\<`void`\>

Nothing.

**`Throws`**

Error if the secret is not found.

---

### renameKey

▸ **renameKey**(`requestContext`, `name`, `newName`): `Promise`\<`void`\>

Rename a key in the vault.

#### Parameters

| Name             | Type              | Description                    |
| :--------------- | :---------------- | :----------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.   |
| `name`           | `string`          | The name of the key to rename. |
| `newName`        | `string`          | The new name of the key.       |

#### Returns

`Promise`\<`void`\>

Nothing.

---

### setSecret

▸ **setSecret**\<`T`\>(`requestContext`, `name`, `data`): `Promise`\<`void`\>

Store a secret in the vault.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name             | Type              | Description                                 |
| :--------------- | :---------------- | :------------------------------------------ |
| `requestContext` | `IRequestContext` | The context for the request.                |
| `name`           | `string`          | The name of the secret in the vault to set. |
| `data`           | `T`               | The secret to add to the vault.             |

#### Returns

`Promise`\<`void`\>

Nothing.

---

### sign

▸ **sign**(`requestContext`, `name`, `data`): `Promise`\<`string`\>

Sign the data using a key in the vault.

#### Parameters

| Name             | Type              | Description                             |
| :--------------- | :---------------- | :-------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.            |
| `name`           | `string`          | The name of the key to use for signing. |
| `data`           | `string`          | The data to sign in base64 form.        |

#### Returns

`Promise`\<`string`\>

The signature for the data in base64 form.

---

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

---

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop

---

### verify

▸ **verify**(`requestContext`, `name`, `data`, `signature`): `Promise`\<`boolean`\>

Verify the signature of the data using a key in the vault.

#### Parameters

| Name             | Type              | Description                                  |
| :--------------- | :---------------- | :------------------------------------------- |
| `requestContext` | `IRequestContext` | The context for the request.                 |
| `name`           | `string`          | The name of the key to use for verification. |
| `data`           | `string`          | The data that was signed in base64 form.     |
| `signature`      | `string`          | The signature to verify in base64 form.      |

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.
