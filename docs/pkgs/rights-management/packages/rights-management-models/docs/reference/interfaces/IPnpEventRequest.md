# Interface: IPnpEventRequest

The request structure for requesting a contract negotiation event.

## Properties

### headers

> **headers**: `object`

The headers which can be used to determine the response data type.

#### accept?

> `optional` **accept**: `"application/ld+json"` \| `"application/json"`

#### authorization?

> `optional` **authorization**: `string`

***

### pathParams

> **pathParams**: `object`

The path parameters of the request.

#### id

> **id**: `string`

The identifier of the negotiation to target.

***

### body

> **body**: `IIdsContractNegotiationEventMessage`

The body parameters of the request.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
