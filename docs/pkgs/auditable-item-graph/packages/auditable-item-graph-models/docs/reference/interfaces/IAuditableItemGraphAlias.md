# Interface: IAuditableItemGraphAlias

Interface describing an alias for a vertex.

## Extends

- [`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md)

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| [`"https://schema.twindev.org/aig/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphAlias"`

JSON-LD Type.

***

### aliasObject?

> `optional` **aliasObject**: `IJsonLdNodeObject`

The JSON-LD object for the alias.

***

### aliasFormat?

> `optional` **aliasFormat**: `string`

The format of the id in the alias.

***

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
