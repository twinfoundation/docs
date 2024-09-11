# Interface: IAuditableItemGraphChangeset

Interface describing a set of updates to the vertex.

## Extends

- [`IAuditableItemGraphIntegrity`](IAuditableItemGraphIntegrity.md)

## Properties

### hash

> **hash**: `string`

The hash for the changeset.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id containing the signature for the changeset.

***

### created

> **created**: `number`

The timestamp of when the changeset was created.

#### Inherited from

[`IAuditableItemGraphIntegrity`](IAuditableItemGraphIntegrity.md).[`created`](IAuditableItemGraphIntegrity.md#created)

***

### userIdentity

> **userIdentity**: `string`

The user identity that created the changes.

#### Inherited from

[`IAuditableItemGraphIntegrity`](IAuditableItemGraphIntegrity.md).[`userIdentity`](IAuditableItemGraphIntegrity.md#useridentity)

***

### patches

> **patches**: [`IAuditableItemGraphPatchOperation`](IAuditableItemGraphPatchOperation.md)[]

The patches for the integrity at this epoch.

#### Inherited from

[`IAuditableItemGraphIntegrity`](IAuditableItemGraphIntegrity.md).[`patches`](IAuditableItemGraphIntegrity.md#patches)
