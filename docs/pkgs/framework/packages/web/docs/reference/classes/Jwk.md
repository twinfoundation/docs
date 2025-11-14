# Class: Jwk

Class to handle JSON Web Keys.

## Constructors

### Constructor

> **new Jwk**(): `Jwk`

#### Returns

`Jwk`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### toCryptoKey()

> `static` **toCryptoKey**(`jwk`, `alg?`): `Promise`\<[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md)\>

Convert the JWK to a crypto key.

#### Parameters

##### jwk

`JWK`

The JWK to convert.

##### alg?

`string`

The alg to be used, defaults to jwk.alg.

#### Returns

`Promise`\<[`JwkCryptoKey`](../type-aliases/JwkCryptoKey.md)\>

The crypto key.

***

### fromEd25519Private()

> `static` **fromEd25519Private**(`privateKey`, `overrideUse?`): `Promise`\<`JWK`\>

Convert the Ed25519 private key to a crypto key.

#### Parameters

##### privateKey

`Uint8Array`

The private key to use.

##### overrideUse?

`string`

Optional override for the use property, defaults to "sig".

#### Returns

`Promise`\<`JWK`\>

The crypto key.

***

### fromEd25519Public()

> `static` **fromEd25519Public**(`publicKey`, `overrideUse?`): `Promise`\<`JWK`\>

Convert the Ed25519 public key to a crypto key.

#### Parameters

##### publicKey

`Uint8Array`

The private key to use.

##### overrideUse?

`string`

Optional override for the use property, defaults to "sig".

#### Returns

`Promise`\<`JWK`\>

The crypto key.

***

### toRaw()

> `static` **toRaw**(`jwk`): `Promise`\<\{ `publicKey?`: `Uint8Array`\<`ArrayBufferLike`\>; `privateKey?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Convert the JWK to raw keys.

#### Parameters

##### jwk

`JWK`

The JWK to convert to raw.

#### Returns

`Promise`\<\{ `publicKey?`: `Uint8Array`\<`ArrayBufferLike`\>; `privateKey?`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

The crypto key.

***

### generateKid()

> `static` **generateKid**(`jwk`): `Promise`\<`string`\>

Generate a KID for the JWK.

#### Parameters

##### jwk

`JWK`

The JWK to generate a KID for.

#### Returns

`Promise`\<`string`\>

The KID.
