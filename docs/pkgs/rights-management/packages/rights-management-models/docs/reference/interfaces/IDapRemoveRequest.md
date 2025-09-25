# Interface: IDapRemoveRequest

The request structure for removing an item with the DAP.

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

The type of the item being removed.

#### id

> **id**: `string`

The id of the item being removed.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
