# Interface: IPnpContractNegotiationResponse

The response structure for negotiating a policy.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/ld+json"` \| `"application/json"`

***

### statusCode?

> `optional` **statusCode**: `HttpStatusCode`

Response status code.

***

### body

> **body**: `IIdsContractNegotiation` \| `IIdsContractNegotiationError`

The state of the policy or an error.
