# Class: RSA

Implementation of the RSA cipher.

## Constructors

### Constructor

> **new RSA**(`publicKey`, `privateKey?`): `RSA`

Create a new instance of RSA.

#### Parameters

##### publicKey

`Uint8Array`

The public key for encryption (DER format as Uint8Array).

##### privateKey?

`Uint8Array`\<`ArrayBufferLike`\>

The private key for decryption (DER format as Uint8Array).

#### Returns

`RSA`

## Methods

### generateKeyPair()

> `static` **generateKeyPair**(`modulusLength`): `Promise`\<\{ `publicKey`: `Uint8Array`; `privateKey`: `Uint8Array`; \}\>

Generate a new RSA key pair in PKCS8 format.

#### Parameters

##### modulusLength

`number` = `2048`

The key size in bits (default: 2048).

#### Returns

`Promise`\<\{ `publicKey`: `Uint8Array`; `privateKey`: `Uint8Array`; \}\>

The public and private keys as Uint8Array.

***

### convertPkcs1ToPkcs8()

> `static` **convertPkcs1ToPkcs8**(`pkcs1Key`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Convert a PKCS1 key to a PKCS8 key.

#### Parameters

##### pkcs1Key

`Uint8Array`

The PKCS1 key as Uint8Array.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The PKCS8 key as Uint8Array.

***

### getPrivateKeyComponents()

> `static` **getPrivateKeyComponents**(`pkcs8Key`): `Promise`\<\{ `n`: `bigint`; `e`: `bigint`; `d`: `bigint`; `p`: `bigint`; `q`: `bigint`; `dp`: `bigint`; `dq`: `bigint`; `qi`: `bigint`; \}\>

Break the private key down in to its components.

#### Parameters

##### pkcs8Key

`Uint8Array`

The PKCS8 key as Uint8Array.

#### Returns

`Promise`\<\{ `n`: `bigint`; `e`: `bigint`; `d`: `bigint`; `p`: `bigint`; `q`: `bigint`; `dp`: `bigint`; `dq`: `bigint`; `qi`: `bigint`; \}\>

The key components.

***

### getPublicKeyComponents()

> `static` **getPublicKeyComponents**(`spkiKey`): `Promise`\<\{ `n`: `bigint`; `e`: `bigint`; \}\>

Break the public key down in to its components.

#### Parameters

##### spkiKey

`Uint8Array`

The SPKI key as Uint8Array.

#### Returns

`Promise`\<\{ `n`: `bigint`; `e`: `bigint`; \}\>

The key components.

***

### publicEncrypt()

> **publicEncrypt**(`data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Encrypt the data using the public key.

#### Parameters

##### data

`Uint8Array`

The data to encrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The data encrypted.

***

### privateEncrypt()

> **privateEncrypt**(`data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Encrypt the data using the private key.

#### Parameters

##### data

`Uint8Array`

The data to encrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The data encrypted.

***

### privateDecrypt()

> **privateDecrypt**(`data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Decrypt the data using the private key.

#### Parameters

##### data

`Uint8Array`

The data to decrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The data decrypted.

#### Throws

GeneralError If no private key is provided.

***

### publicDecrypt()

> **publicDecrypt**(`data`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Decrypt the data using the public key.

#### Parameters

##### data

`Uint8Array`

The data to decrypt.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The data decrypted.
