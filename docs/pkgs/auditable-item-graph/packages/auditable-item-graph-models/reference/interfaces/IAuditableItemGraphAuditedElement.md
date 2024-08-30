# Interface: IAuditableItemGraphAuditedElement

Interface describing the base properties for auditable elements.

## Extended by

- [`IAuditableItemGraphAlias`](IAuditableItemGraphAlias.md)
- [`IAuditableItemGraphEdge`](IAuditableItemGraphEdge.md)
- [`IAuditableItemGraphProperty`](IAuditableItemGraphProperty.md)
- [`IAuditableItemGraphResource`](IAuditableItemGraphResource.md)

## Properties

### id

> **id**: `string`

The id of the element.

***

### created

> **created**: `number`

The timestamp of when the element was created.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the element was deleted, as we never actually remove items.
A property can also be marked as deleted if the value was updated, in which case
a new value is created and the old one marked as deleted.
