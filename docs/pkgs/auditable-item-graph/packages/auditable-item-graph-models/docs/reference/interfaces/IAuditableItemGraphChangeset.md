# Interface: IAuditableItemGraphChangeset

Interface describing a set of updates to the vertex.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| [`"https://schema.twindev.org/aig/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphChangeset"`

JSON-LD Type.

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

### hash

> **hash**: `string`

The hash for the changeset.

***

### signature

> **signature**: `string`

The signature for the changeset.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id containing the signature for the changeset.

***

### verification?

> `optional` **verification**: [`IAuditableItemGraphVerification`](IAuditableItemGraphVerification.md)

The verification for the changeset.
