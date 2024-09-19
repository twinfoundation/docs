# Interface: IAuditableItemGraphGetResponse

Response to getting an auditable item graph vertex.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### Content-Type

> **Content-Type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: `IJsonLdDocument` \| [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md) & `object`

The response body, if accept header is set to application/ld+json the return object is JSON-LD document.
