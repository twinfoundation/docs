# Interface: IBlobStorageListResponse

Response to getting the list of entries from a query.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: [`IBlobStorageEntryList`](IBlobStorageEntryList.md)

The list of entries from the query.
