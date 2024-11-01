# Interface: IBlobStorageGetResponse

Response to get an entry from blob storage.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: [`IBlobStorageEntry`](IBlobStorageEntry.md)

The body parameters.
