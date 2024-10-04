# Interface: IImmutableProof

Interface describing an immutable proof state.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/immutable-proof/"` \| [`"https://schema.twindev.org/immutable-proof/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"ImmutableProof"`

JSON-LD Type.

***

### id

> **id**: `string`

The id of the proof.

***

### userIdentity

> **userIdentity**: `string`

The id of the user who created the proof.

***

### proofObjectId?

> `optional` **proofObjectId**: `string`

The id of the object associated with the proof.

***

### proofObjectHash

> **proofObjectHash**: `string`

The hash of the object associated with the proof.

***

### proof?

> `optional` **proof**: `IDidProof`

The proof which can be undefined if it has not yet been issued.
