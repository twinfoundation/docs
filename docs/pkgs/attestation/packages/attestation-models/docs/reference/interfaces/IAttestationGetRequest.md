# Interface: IAttestationGetRequest

Verify that the proof is valid for the attestation.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### pathParams

> **pathParams**: `object`

The parameters to be used in the verification.

#### id

> **id**: `string`

The attestation id to verify.
