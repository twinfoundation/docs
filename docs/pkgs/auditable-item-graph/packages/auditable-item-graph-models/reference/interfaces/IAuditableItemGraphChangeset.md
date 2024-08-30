# Interface: IAuditableItemGraphChangeset

Interface describing a set of updates to the vertex.

## Properties

### created

> **created**: `number`

The timestamp of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user who made the changeset.

***

### hash

> **hash**: `string`

The hash for the changeset.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id containing the signature for the changeset.
