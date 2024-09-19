# Interface: IAuditableItemGraphVertex

Interface describing an auditable item graph vertex.

## Extends

- `Omit`\<[`IAuditableItemGraphAuditedElement`](IAuditableItemGraphAuditedElement.md), `"deleted"`\>.`IAuditableItemGraphMetadataElement`

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

### updated?

> `optional` **updated**: `number`

The timestamp of when the element was updated.

#### Inherited from

`Omit.updated`

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

The metadata to associate with the element as JSON-LD.

#### Inherited from

`IAuditableItemGraphMetadataElement.metadata`

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node which controls the vertex.

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
