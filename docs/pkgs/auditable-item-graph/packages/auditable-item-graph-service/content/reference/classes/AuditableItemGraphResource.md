# Class: AuditableItemGraphResource

Class describing the auditable item graph vertex resource.

## Constructors

### new AuditableItemGraphResource()

> **new AuditableItemGraphResource**(): [`AuditableItemGraphResource`](AuditableItemGraphResource.md)

#### Returns

[`AuditableItemGraphResource`](AuditableItemGraphResource.md)

## Properties

### id

> **id**: `string`

The id of the resource.

***

### created

> **created**: `number`

The timestamp of when the resource was created.

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the resource was updated.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the resource was deleted, as we never actually remove items.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Metadata to associate with the resource as JSON-LD.
