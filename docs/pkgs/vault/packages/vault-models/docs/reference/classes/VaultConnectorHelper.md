# Class: VaultConnectorHelper

Helpers for vault connectors.

## Constructors

### Constructor

> **new VaultConnectorHelper**(): `VaultConnectorHelper`

#### Returns

`VaultConnectorHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### jwtSigner()

> `static` **jwtSigner**(`vaultConnector`, `keyName`, `header`, `payload`): `Promise`\<`string`\>

Sign a JWT using vault connector.

#### Parameters

##### vaultConnector

[`IVaultConnector`](../interfaces/IVaultConnector.md)

The vault connector to use.

##### keyName

`string`

The name of the key to sign with.

##### header

`JWTHeaderParameters`

The header to sign.

##### payload

`JWTPayload`

The payload to sign.

#### Returns

`Promise`\<`string`\>

The token.

***

### jwtVerifier()

> `static` **jwtVerifier**\<`T`, `U`\>(`vaultConnector`, `keyName`, `token`): `Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

Verify a JWT using a vault connector.

#### Type Parameters

##### T

`T` *extends* `JWTHeaderParameters`

##### U

`U` *extends* `JWTPayload`

#### Parameters

##### vaultConnector

[`IVaultConnector`](../interfaces/IVaultConnector.md)

The vault connector to use.

##### keyName

`string`

The name of the key to verify with.

##### token

`string`

The token to verify.

#### Returns

`Promise`\<\{ `header`: `T`; `payload`: `U`; \}\>

The header and payload if verification successful.
