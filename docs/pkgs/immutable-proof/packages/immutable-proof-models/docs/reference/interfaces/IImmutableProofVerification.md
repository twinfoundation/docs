# Interface: IImmutableProofVerification

Interface describing an immutable proof verification.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/immutable-proof/"`

JSON-LD Context.

***

### type

> **type**: `"ImmutableProofVerification"`

JSON-LD Type.

***

### verified

> **verified**: `boolean`

Was the verification successful.

***

### failure?

> `optional` **failure**: [`ImmutableProofFailure`](../type-aliases/ImmutableProofFailure.md)

If the verification was unsuccessful the failure reason.
