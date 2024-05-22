# Interface: IIdentityListRequest

Request to get a list of identities by role.

## Properties

### query

> **query**: `object`

The query parameters.

#### role

> **role**: [`IdentityRole`](../enumerations/IdentityRole.md)

The property name to use for lookup.

#### propertyNames?

> `optional` **propertyNames**: `string`

The properties to get for the profile, defaults to all, should be a comma separated list.

#### cursor?

> `optional` **cursor**: `string`

The cursor for paged requests.

#### pageSize?

> `optional` **pageSize**: `number`

Number of items to return.
