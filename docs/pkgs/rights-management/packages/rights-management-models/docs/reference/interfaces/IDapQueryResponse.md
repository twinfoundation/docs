# Interface: IDapQueryResponse

The response structure for querying item with the DAP.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/ld+json"` \| `"application/json"`

***

### body

> **body**: [`IDataAccessQueryResponse`](IDataAccessQueryResponse.md)

The body parameters of the request.
