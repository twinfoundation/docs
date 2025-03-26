# Interface: IAuditableItemGraphChangeset

Interface describing a set of updates to the vertex.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/aig/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphChangeset"`

JSON-LD Type.

***

### id

> **id**: `string`

The id of the changeset.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The user identity that created the changes.

***

### patches

> **patches**: [`IAuditableItemGraphPatchOperation`](IAuditableItemGraphPatchOperation.md)[]

The patches in the changeset.

***

### proofId?

> `optional` **proofId**: `string`

The immutable proof id which contains the signature for this changeset.

***

### verification?

> `optional` **verification**: `IImmutableProofVerification`

The verification for the changeset.
