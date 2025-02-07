# Class: IdentityResolverService

Class which implements the identity resolver contract.

## Implements

- `IIdentityResolverComponent`

## Constructors

### new IdentityResolverService()

> **new IdentityResolverService**(`options`?): [`IdentityResolverService`](IdentityResolverService.md)

Create a new instance of IdentityResolverService.

#### Parameters

##### options?

[`IIdentityResolverServiceConstructorOptions`](../interfaces/IIdentityResolverServiceConstructorOptions.md)

The options for the service.

#### Returns

[`IdentityResolverService`](IdentityResolverService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"identity-resolver"`

The namespace supported by the identity service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityResolverComponent.CLASS_NAME`

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

#### Implementation of

`IIdentityResolverComponent.identityResolve`
