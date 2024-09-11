# Interface: IAuditableItemGraphIntegrity

The integrity data used in credentials.

## Extended by

- [`IAuditableItemGraphChangeset`](IAuditableItemGraphChangeset.md)

## Properties

### created

> **created**: `number`

The timestamp of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The user identity that created the changes.

***

### patches

> **patches**: [`IAuditableItemGraphPatchOperation`](IAuditableItemGraphPatchOperation.md)[]

The patches for the integrity at this epoch.
