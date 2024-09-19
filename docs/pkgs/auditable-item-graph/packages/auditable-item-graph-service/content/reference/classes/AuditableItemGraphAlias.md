# Class: AuditableItemGraphAlias

Class describing the auditable item graph alias.

## Constructors

### new AuditableItemGraphAlias()

> **new AuditableItemGraphAlias**(): [`AuditableItemGraphAlias`](AuditableItemGraphAlias.md)

#### Returns

[`AuditableItemGraphAlias`](AuditableItemGraphAlias.md)

## Properties

### id

> **id**: `string`

The alternative alias for the vertex.

***

### format?

> `optional` **format**: `string`

The format of the alias for the vertex.

***

### created

> **created**: `number`

The timestamp of when the alias was created.

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the alias was updated.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the alias was deleted, as we never actually remove items.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Metadata to associate with the alias as JSON-LD.
