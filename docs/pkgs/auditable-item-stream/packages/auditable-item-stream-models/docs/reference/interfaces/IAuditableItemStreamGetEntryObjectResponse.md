# Interface: IAuditableItemStreamGetEntryObjectResponse

Response to getting an auditable item stream entry object.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: `IJsonLdNodeObject`

The response body, if accept header is set to application/ld+json the return object is JSON-LD document.
