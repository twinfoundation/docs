# Interface: IDapGetResponse

The response structure for getting an item with the DAP.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/ld+json"` \| `"application/json"`

***

### body

> **body**: `IJsonLdNodeObject`

The body parameters of the request.
