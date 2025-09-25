# Interface: IPnpNegotiateRequest

The request structure for requesting a contract negotiation.

## Properties

### headers

> **headers**: `object`

The headers which can be used to determine the response data type.

#### accept?

> `optional` **accept**: `"application/ld+json"` \| `"application/json"`

#### authorization?

> `optional` **authorization**: `string`

***

### pathParams?

> `optional` **pathParams**: `object`

The path parameters of the request.

#### id?

> `optional` **id**: `string`

The identifier of the contract negotiation to be retrieved, can be undefined.

***

### body

> **body**: `IIdsContractRequestMessage`

The body parameters of the request.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
