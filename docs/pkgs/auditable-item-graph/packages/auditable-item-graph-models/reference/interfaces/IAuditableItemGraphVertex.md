# Interface: IAuditableItemGraphVertex

Interface describing an auditable item graph vertex.

## Extends

- `Omit`\<[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md), `"deleted"`\>.[`IAuditableItemGraphMetadataElement`](IAuditableItemGraphMetadataElement.md)

## Properties

### id

> **id**: `string`

The id of the element.

#### Inherited from

`Omit.id`

***

### created

> **created**: `number`

The timestamp of when the element was created.

#### Inherited from

`Omit.created`

***

### metadata?

> `optional` **metadata**: [`IAuditableItemGraphProperty`](IAuditableItemGraphProperty.md)[]

Metadata to associate with the element.

#### Inherited from

[`IAuditableItemGraphMetadataElement`](IAuditableItemGraphMetadataElement.md).[`metadata`](IAuditableItemGraphMetadataElement.md#metadata)

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node which controls the vertex.

***

### updated

> **updated**: `number`

The timestamp of when the element was last updated.

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

Changesets containing time sliced changes to the vertex.
