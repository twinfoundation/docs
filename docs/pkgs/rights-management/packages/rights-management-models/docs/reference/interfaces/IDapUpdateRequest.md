# Interface: IDapUpdateRequest

The request structure for updating an item with the DAP.

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

The type of the item being updated.

#### id

> **id**: `string`

The id of the item being updated.

***

### body

> **body**: [`IDataAccessRequestWithObject`](IDataAccessRequestWithObject.md)

The body parameters of the updated.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
