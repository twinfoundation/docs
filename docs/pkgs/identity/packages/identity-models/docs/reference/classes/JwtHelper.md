# Class: JwtHelper

Helper methods for JSON Web Tokens.

## Constructors

### new JwtHelper()

> **new JwtHelper**(): [`JwtHelper`](JwtHelper.md)

#### Returns

[`JwtHelper`](JwtHelper.md)

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### parse()

> `static` **parse**\<`U`, `T`\>(`jwt`, `paramsToCheck`?): `Promise`\<\{ `header`: `U`; `payload`: `T`; `signature`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

Parse the token and check that the properties are valid.

#### Type Parameters

• **U** *extends* `IJwtHeader`

• **T** *extends* `IJwtPayload`

#### Parameters

##### jwt

`string`

The token top validate.

##### paramsToCheck?

`string`[]

Parameters to check they exist.

#### Returns

`Promise`\<\{ `header`: `U`; `payload`: `T`; `signature`: `Uint8Array`\<`ArrayBufferLike`\>; \}\>

The token components.

#### Throws

Error if the token is invalid.
