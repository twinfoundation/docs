# Class: IdentityService

Class which implements the identity contract.

## Implements

- `IIdentityComponent`

## Constructors

### new IdentityService()

> **new IdentityService**(`config`?): [`IdentityService`](IdentityService.md)

Create a new instance of IdentityService.

#### Parameters

• **config?**: [`IIdentityServiceConfig`](../interfaces/IIdentityServiceConfig.md)

The configuration for the service.

#### Returns

[`IdentityService`](IdentityService.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"did"`

The namespace supported by the identity service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityComponent.CLASS_NAME`

## Methods

### resolve()

> **resolve**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Implementation of

`IIdentityComponent.resolve`
