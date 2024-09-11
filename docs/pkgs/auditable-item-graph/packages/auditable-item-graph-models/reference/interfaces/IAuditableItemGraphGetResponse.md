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

> **body**: IJsonLdDocument \| IAuditableItemGraphVertex & `object`

The response body, id accept header is set to application/ld+json the return object is JSON-LD document.

#### Type declaration

##### verified?

> `optional` **verified**: `boolean`

Whether the vertex has been verified.

##### verification?

> `optional` **verification**: `object`[]

The verification for the changesets including any failure information.
