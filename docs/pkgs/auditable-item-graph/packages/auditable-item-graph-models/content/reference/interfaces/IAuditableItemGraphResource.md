# Interface: IAuditableItemGraphResource

Interface describing an auditable item graph vertex resource.

## Extends

- [`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).`IAuditableItemGraphMetadataElement`

## Properties

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
