# Interface: IAuditableItemGraphResource

Interface describing an auditable item graph vertex resource.

## Extends

- [`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md)

## Properties

### id

> **id**: `string`

The id of the element.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`id`](IAuditableItemGraphAuditedElement.md#id)

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the element was created.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`dateCreated`](IAuditableItemGraphAuditedElement.md#datecreated)

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the element was modified.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`dateModified`](IAuditableItemGraphAuditedElement.md#datemodified)

***

### dateDeleted?

> `optional` **dateDeleted**: `string`

The date/time of when the element was deleted, as we never actually remove items.

#### Inherited from

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`dateDeleted`](IAuditableItemGraphAuditedElement.md#datedeleted)

***

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| [`"https://schema.twindev.org/aig/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphResource"`

JSON-LD Type.

***

### resourceObject?

> `optional` **resourceObject**: `IJsonLdNodeObject`

The JSON-LD object for the resource.
