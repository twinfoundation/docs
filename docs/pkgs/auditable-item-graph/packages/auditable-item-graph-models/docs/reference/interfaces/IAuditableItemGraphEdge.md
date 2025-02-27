# Interface: IAuditableItemGraphEdge

Interface describing an edge between two vertices in an auditable item graph.

## Extends

- [`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md)

## Properties

### dateCreated?

> `optional` **dateCreated**: `string`

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

> **@context**: `"https://schema.twindev.org/aig/"` \| \[`"https://schema.twindev.org/aig/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### id

> **id**: `string`

The id of the element.

#### Overrides

[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md).[`id`](IAuditableItemGraphAuditedElement.md#id)

***

### type

> **type**: `"AuditableItemGraphEdge"`

JSON-LD Type.

***

### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

The JSON-LD annotation object for the edge.

***

### edgeRelationship

> **edgeRelationship**: `string`

The relationship between the two vertices.
