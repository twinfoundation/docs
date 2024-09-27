# Class: AuditableItemGraphChangeset

Class describing a set of updates to the vertex.

## Constructors

### new AuditableItemGraphChangeset()

> **new AuditableItemGraphChangeset**(): [`AuditableItemGraphChangeset`](AuditableItemGraphChangeset.md)

#### Returns

[`AuditableItemGraphChangeset`](AuditableItemGraphChangeset.md)

## Properties

### hash

> **hash**: `string`

The hash of the changeset.

***

### vertexId

> **vertexId**: `string`

The vertex the changeset belongs to.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user who made the changeset.

***

### patches

> **patches**: [`AuditableItemGraphPatch`](AuditableItemGraphPatch.md)[]

The patches in the changeset.

***

### signature

> **signature**: `string`

The signature of the changeset.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id which contains the signature for this changeset.
