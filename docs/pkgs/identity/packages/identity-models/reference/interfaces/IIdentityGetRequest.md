# Interface: IIdentityGetRequest

Get the profile for an identity.

## Properties

### path

> **path**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to get the profile for.

***

### query

> **query**: `object`

The query parameters.

#### propertyNames?

> `optional` **propertyNames**: `string`

The properties to get for the profile, defaults to all, should be a comma separated list.
