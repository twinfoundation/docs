# Interface: IAuditableItemGraphEdge

Interface describing an edge between two vertices in an auditable item graph.

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

> **type**: `"AuditableItemGraphEdge"`

JSON-LD Type.

***

### edgeObject?

> `optional` **edgeObject**: `IJsonLdNodeObject`

The JSON-LD object for the edge.

***

### edgeRelationship

> **edgeRelationship**: `string`

The relationship between the two vertices.
