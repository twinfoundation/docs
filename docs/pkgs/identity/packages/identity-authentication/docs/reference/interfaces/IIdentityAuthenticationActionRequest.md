# Interface: IIdentityAuthenticationActionRequest

The JSON-LD definition for a action request.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/identity-authentication"`

The JSON-LD context.

***

### type

> **type**: `"ActionRequest"`

The type of the request.

***

### requester

> **requester**: `string`

The identity of the entity making the request.

***

### action?

> `optional` **action**: `string`

The action which can be checked to make sure it matches the specific operation.

***

### data?

> `optional` **data**: `unknown`

Additional data for the action request, can be customised per request.
