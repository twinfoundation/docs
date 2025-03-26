# Interface: IImmutableProof

Interface describing an immutable proof state.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/immutable-proof/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

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

### nodeIdentity

> **nodeIdentity**: `string`

The id of the node who created the proof.

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

### verifiableStorageId?

> `optional` **verifiableStorageId**: `string`

The verifiable storage id for where the proof is stored.

***

### proof?

> `optional` **proof**: `IDataIntegrityProof`

The proof which can be undefined if it has not yet been issued.

***

### immutableReceipt?

> `optional` **immutableReceipt**: `IJsonLdNodeObject`

The immutable receipt detail for where the proof is stored.
