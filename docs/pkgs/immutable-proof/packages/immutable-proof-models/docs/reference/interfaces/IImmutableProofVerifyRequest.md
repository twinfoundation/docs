# Interface: IImmutableProofVerifyRequest

Verify a proof.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### pathParams

> **pathParams**: `object`

The parameters from the path.

#### id

> **id**: `string`

The id of the immutable proof to verify.

***

### body

> **body**: `object`

The parameters from the body.

#### proofObject

> **proofObject**: `IJsonLdNodeObject`

The proof object to verify.
