# Interface: IAuditableItemGraphAlias

Interface describing an alias for a vertex.

## Extends

- [`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).`IAuditableItemGraphMetadataElement`

## Properties

### format?

> `optional` **format**: `string`

The format of the id in the alias.

***

### id

> **id**: `string`

The id of the element.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`id`](IAuditableItemGraphAuditedElement.md#id)

***

### created

> **created**: `number`

The timestamp of when the element was created.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`created`](IAuditableItemGraphAuditedElement.md#created)

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the element was updated.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`updated`](IAuditableItemGraphAuditedElement.md#updated)

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the element was deleted, as we never actually remove items.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`deleted`](IAuditableItemGraphAuditedElement.md#deleted)

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

The metadata to associate with the element as JSON-LD.

#### Inherited from

`IAuditableItemGraphMetadataElement.metadata`
