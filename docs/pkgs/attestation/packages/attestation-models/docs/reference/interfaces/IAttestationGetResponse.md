# Interface: IAttestationGetResponse

The response to verifying the attestation.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### content-type

> **content-type**: `"application/json"` \| `"application/ld+json"`

***

### body

> **body**: [`IAttestationInformation`](IAttestationInformation.md)

The data returned from the verification response.
