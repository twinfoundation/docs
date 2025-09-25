# Interface: IDapQueryRequest

The request structure for querying items with the DAP.

## Properties

### headers

> **headers**: `object`

The headers which can be used to determine the response data type.

#### accept?

> `optional` **accept**: `"application/ld+json"` \| `"application/json"`

#### authorization?

> `optional` **authorization**: `string`

***

### pathParams

> **pathParams**: `object`

The path parameters of the request.

#### assetType

> **assetType**: `string`

The type of the item being requested.

***

### body

> **body**: [`IDataAccessQuery`](IDataAccessQuery.md)

The body parameters of the request.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
