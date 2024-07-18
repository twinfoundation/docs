# Class: IdentityService

Class which implements the identity contract.

## Implements

- `IIdentity`

## Constructors

### new IdentityService()

> **new IdentityService**(`options`?): [`IdentityService`](IdentityService.md)

Create a new instance of Identity.

#### Parameters

• **options?**

The dependencies for the identity service.

• **options.identityConnectorType?**: `string`

The identity connector type, defaults to "identity".

#### Returns

[`IdentityService`](IdentityService.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentity.CLASS_NAME`

## Methods

### create()

> **create**(`controller`, `requestContext`?): `Promise`\<`object`\>

Create a new identity.

#### Parameters

• **controller**: `string`

The controller for the identity.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The created identity details.

##### identity

> **identity**: `string`

The identity created.

#### Implementation of

`IIdentity.create`
