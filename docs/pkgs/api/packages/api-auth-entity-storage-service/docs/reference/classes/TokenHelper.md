# Class: TokenHelper

Helper class for token operations.

## Constructors

### Constructor

> **new TokenHelper**(): `TokenHelper`

#### Returns

`TokenHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createToken()

> `static` **createToken**(`vaultConnector`, `signingKeyName`, `userIdentity`, `organizationIdentity`, `ttlMinutes`): `Promise`\<\{ `token`: `string`; `expiry`: `number`; \}\>

Create a new token.

#### Parameters

##### vaultConnector

`IVaultConnector`

The vault connector.

##### signingKeyName

`string`

The signing key name.

##### userIdentity

`string`

The subject for the token.

##### organizationIdentity

The organization for the token.

`string` | `undefined`

##### ttlMinutes

`number`

The time to live for the token in minutes.

#### Returns

`Promise`\<\{ `token`: `string`; `expiry`: `number`; \}\>

The new token and its expiry date.

***

### verify()

> `static` **verify**(`vaultConnector`, `signingKeyName`, `token`): `Promise`\<\{ `header`: `JWTHeaderParameters`; `payload`: `JWTPayload`; \}\>

Verify the token.

#### Parameters

##### vaultConnector

`IVaultConnector`

The vault connector.

##### signingKeyName

`string`

The signing key name.

##### token

The token to verify.

`string` | `undefined`

#### Returns

`Promise`\<\{ `header`: `JWTHeaderParameters`; `payload`: `JWTPayload`; \}\>

The verified details.

#### Throws

UnauthorizedError if the token is missing, invalid or expired.

***

### extractTokenFromHeaders()

> `static` **extractTokenFromHeaders**(`headers?`, `cookieName?`): \{ `token`: `string`; `location`: `"authorization"` \| `"cookie"`; \} \| `undefined`

Extract the auth token from the headers, either from the authorization header or the cookie header.

#### Parameters

##### headers?

`IHttpHeaders`

The headers to extract the token from.

##### cookieName?

`string`

The name of the cookie to extract the token from.

#### Returns

\{ `token`: `string`; `location`: `"authorization"` \| `"cookie"`; \} \| `undefined`

The token if found.
