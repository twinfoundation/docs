# Interface: IImmutableProofVerifyResponse

Response to verifying an immutable proof.

## Properties

### body

> **body**: `object`

The response body.

#### verified

> **verified**: `boolean`

Was the proof verified.

#### failure?

> `optional` **failure**: [`ImmutableProofFailure`](../type-aliases/ImmutableProofFailure.md)

If not verified what was the failure.
