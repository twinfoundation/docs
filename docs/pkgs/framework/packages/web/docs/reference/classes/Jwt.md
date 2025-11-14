# Class: Jwt

Class to handle JSON Web Tokens.

## Constructors

### Constructor

> **new Jwt**(): `Jwt`

#### Returns

`Jwt`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### encode()

> `static` **encode**\<`T`, `U`\>(`header`, `payload`, `key`): `Promise`\<`string`\>

Encode a token.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### header

`T`

The header to encode.

##### payload

`U`

The payload to encode.

##### key

[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md)

The key for signing the token, can be omitted if a signer is provided.

#### Returns

`Promise`\<`string`\>

The encoded token.

***

### encodeWithSigner()

> `static` **encodeWithSigner**\<`T`, `U`\>(`header`, `payload`, `signer`): `Promise`\<`string`\>

Encode a token.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### header

`T`

The header to encode.

##### payload

`U`

The payload to encode.

##### signer

(`header`, `payload`, `key`) => `Promise`\<`string`\>

Custom signer method.

#### Returns

`Promise`\<`string`\>

The encoded token.

***

### decode()

> `static` **decode**\<`T`, `U`\>(`token`): `Promise`\<\{ `header?`: `T`; `payload?`: `U`; `signature?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Decode a token.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### token

`string`

The token to decode.

#### Returns

`Promise`\<\{ `header?`: `T`; `payload?`: `U`; `signature?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

The decoded payload.

***

### verify()

> `static` **verify**\<`T`, `U`\>(`token`, `key`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Verify a token.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### token

`string`

The token to verify.

##### key

[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md)

The key for verifying the token

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The decoded payload.

***

### verifyWithVerifier()

> `static` **verifyWithVerifier**\<`T`, `U`\>(`token`, `verifier`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Verify a token.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### token

`string`

The token to verify.

##### verifier

(`token`, `key`) => `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Custom verification method.

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The decoded payload.

***

### verifySignature()

> `static` **verifySignature**\<`T`, `U`\>(`token`, `key?`, `verifier?`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Verify a token by parts.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### token

`string`

The token to verify.

##### key?

[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md)

The key for verifying the token, if not provided no verification occurs.

##### verifier?

(`token`, `key`) => `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Custom verification method.

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

True if the parts are verified.

***

### defaultSigner()

> `static` **defaultSigner**(`header`, `payload`, `key`): `Promise`\<`string`\>

The default signer for the JWT.

#### Parameters

##### header

`JWTHeaderParameters`

The header to sign.

##### payload

`JWTPayload`

The payload to sign.

##### key

The optional key to sign with.

[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md) | `undefined`

#### Returns

`Promise`\<`string`\>

The signature.

***

### defaultVerifier()

> `static` **defaultVerifier**\<`T`, `U`\>(`token`, `key`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The default verifier for the JWT.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### token

`string`

The token to verify.

##### key

The key to verify with.

[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md) | `undefined`

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The header and payload if verification successful.

***

### toSigningBytes()

> `static` **toSigningBytes**\<`T`, `U`\>(`header`, `payload`): `Uint8Array`

Create bytes for signing from header and payload.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### header

`T`

The header.

##### payload

`U`

The payload.

#### Returns

`Uint8Array`

The bytes to sign.

***

### fromSigningBytes()

> `static` **fromSigningBytes**\<`T`, `U`\>(`signingBytes`): `object`

Create header and payload from signing bytes.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### signingBytes

`Uint8Array`

The signing bytes from a token.

#### Returns

`object`

The header and payload.

##### header

> **header**: `T`

##### payload

> **payload**: `U`

#### Throws

If the signing bytes are invalid

***

### tokenFromBytes()

> `static` **tokenFromBytes**(`signingBytes`, `signature`): `string`

Convert signed bytes and signature bytes to token.

#### Parameters

##### signingBytes

`Uint8Array`

The signed bytes.

##### signature

`Uint8Array`

The signature.

#### Returns

`string`

The token.

***

### tokenToBytes()

> `static` **tokenToBytes**(`token`): `object`

Convert the token to signing bytes and signature bytes.

#### Parameters

##### token

`string`

The token to convert to bytes.

#### Returns

`object`

The decoded bytes.

##### signingBytes

> **signingBytes**: `Uint8Array`

##### signature

> **signature**: `Uint8Array`

#### Throws

If the token is invalid.
