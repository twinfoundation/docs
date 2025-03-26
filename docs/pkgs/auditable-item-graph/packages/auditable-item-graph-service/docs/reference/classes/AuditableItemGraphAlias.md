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

### aliasFormat?

> `optional` **aliasFormat**: `string`

The format of the alias for the vertex.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the alias was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the alias was last modified.

***

### dateDeleted?

> `optional` **dateDeleted**: `string`

The timestamp of when the alias was deleted, as we never actually remove items.

***

### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

Object to associate with the alias as JSON-LD.
