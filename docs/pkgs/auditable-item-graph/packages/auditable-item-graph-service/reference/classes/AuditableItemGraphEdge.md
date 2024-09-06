# Class: AuditableItemGraphEdge

Class describing the auditable item graph edge.

## Constructors

### new AuditableItemGraphEdge()

> **new AuditableItemGraphEdge**(): [`AuditableItemGraphEdge`](AuditableItemGraphEdge.md)

#### Returns

[`AuditableItemGraphEdge`](AuditableItemGraphEdge.md)

## Properties

### id

> **id**: `string`

The id of the edge.

***

### created

> **created**: `number`

The timestamp of when the edge was created.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the edge was deleted, as we never actually remove items.

***

### relationship

> **relationship**: `string`

The relationship between the two vertices.

***

### metadata?

> `optional` **metadata**: `unknown`

Metadata to associate with the edge as JSON-LD.
