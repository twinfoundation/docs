# Interface: IIdentityCreateRequest

Create a new identity.

## Properties

### body

> **body**: `object`

The data for the request.

#### controller

> **controller**: `string`

The controller for the identity.

#### role

> **role**: [`IdentityRole`](../type-aliases/IdentityRole.md)

The role for the identity.

#### properties?

> `optional` **properties**: `IProperty`[]

Initial properties for the identity.
