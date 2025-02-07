# Interface: IIdentityProofCreateRequest

Request to create a proof.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to create the proof for.

#### verificationMethodId

> **verificationMethodId**: `string`

The verification method id to use.

***

### body

> **body**: `object`

The data for the request.

#### bytes

> **bytes**: `string`

The data bytes base64 encoded.
