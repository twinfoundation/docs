# Interface: IAuditableItemGraphListResponse

The response to getting the a list of the vertices with matching ids or aliases.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: [`IAuditableItemGraphVertexList`](IAuditableItemGraphVertexList.md)

The response payload.
