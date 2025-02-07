# Interface: IIdentityResolverComponent

Interface describing a contract which provides identity operations.

## Extends

- `IComponent`

## Methods

### identityResolve()

> **identityResolve**(`identity`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

##### identity

`string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.
