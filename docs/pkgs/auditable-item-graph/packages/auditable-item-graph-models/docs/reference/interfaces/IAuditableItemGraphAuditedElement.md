# Interface: IAuditableItemGraphAuditedElement

Interface describing the base properties for auditable elements.

## Extended by

- [`IAuditableItemGraphAlias`](IAuditableItemGraphAlias.md)
- [`IAuditableItemGraphEdge`](IAuditableItemGraphEdge.md)
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

### updated?

> `optional` **updated**: `number`

The timestamp of when the element was updated.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the element was deleted, as we never actually remove items.
