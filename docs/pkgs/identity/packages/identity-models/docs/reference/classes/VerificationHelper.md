# Class: VerificationHelper

Helper methods for verification.

## Constructors

### new VerificationHelper()

> **new VerificationHelper**(): [`VerificationHelper`](VerificationHelper.md)

#### Returns

[`VerificationHelper`](VerificationHelper.md)

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### verifyJwt()

> `static` **verifyJwt**\<`T`, `U`\>(`resolver`, `jwt`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Verified the JWT.

#### Type Parameters

• **T** *extends* `IJwtHeader`

• **U** *extends* `IJwtPayload`

#### Parameters

##### resolver

[`IIdentityResolverComponent`](../interfaces/IIdentityResolverComponent.md)

The resolver to use for finding the document.

##### jwt

`string`

The token to verify.

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The decoded payload.

***

### verifyProof()

> `static` **verifyProof**(`resolver`, `secureDocument`): `Promise`\<`boolean`\>

Verified the proof for the document e.g. verifiable credential.

#### Parameters

##### resolver

[`IIdentityResolverComponent`](../interfaces/IIdentityResolverComponent.md)

The resolver to use for finding the document.

##### secureDocument

`IJsonLdNodeObject`

The secure document to verify.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.
