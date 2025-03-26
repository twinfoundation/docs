# Interface: IAuditableItemGraphVertex

Interface describing an auditable item graph vertex.

## Extends

- `Omit`\<[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md), `"deleted"`\>

## Properties

### dateCreated?

> `optional` **dateCreated**: `string`

The date/time of when the element was created.

#### Inherited from

`Omit.dateCreated`

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the element was modified.

#### Inherited from

`Omit.dateModified`

***

### dateDeleted?

> `optional` **dateDeleted**: `string`

The date/time of when the element was deleted, as we never actually remove items.

#### Inherited from

`Omit.dateDeleted`

***

### @context

> **@context**: \[`"https://schema.twindev.org/aig/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### id

> **id**: `string`

The id of the element.

#### Overrides

`Omit.id`

***

### type

> **type**: `"AuditableItemGraphVertex"`

JSON-LD Type.

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node which controls the vertex.

***

### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

The JSON-LD annotation object for the vertex.

***

### aliases?

> `optional` **aliases**: [`IAuditableItemGraphAlias`](IAuditableItemGraphAlias.md)[]

Alternative aliases that can be used to identify the vertex.

***

### resources?

> `optional` **resources**: [`IAuditableItemGraphResource`](IAuditableItemGraphResource.md)[]

The resources attached to the vertex.

***

### edges?

> `optional` **edges**: [`IAuditableItemGraphEdge`](IAuditableItemGraphEdge.md)[]

Edges connected to the vertex.

***

### changesets?

> `optional` **changesets**: [`IAuditableItemGraphChangeset`](IAuditableItemGraphChangeset.md)[]

Changesets for the vertex.

***

### verified?

> `optional` **verified**: `boolean`

Is the vertex verified, will only be populated when verification is requested.
