# Interface: IPnpOfferRequest

The request structure for sending a contract negotiation offer.

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

The identifier of the consumer being offered, this can be undefined.

***

### body

> **body**: `IIdsContractOfferMessage`

The body parameters of the request.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
