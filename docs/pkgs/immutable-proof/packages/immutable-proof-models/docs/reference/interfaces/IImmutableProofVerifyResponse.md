# Interface: IImmutableProofVerifyResponse

Response to verifying an immutable proof.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: [`IImmutableProofVerification`](IImmutableProofVerification.md)

The response body.
