# Class: AuditableItemGraphVertex

Class describing the auditable item graph vertex.

## Constructors

### new AuditableItemGraphVertex()

> **new AuditableItemGraphVertex**(): [`AuditableItemGraphVertex`](AuditableItemGraphVertex.md)

#### Returns

[`AuditableItemGraphVertex`](AuditableItemGraphVertex.md)

## Properties

### id

> **id**: `string`

The id of the vertex.

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node which controls the vertex.

***

### created

> **created**: `number`

The timestamp of when the vertex was created.

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the vertex was last updated.

***

### aliasIndex?

> `optional` **aliasIndex**: `string`

Combined alias index for the vertex used for querying.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Metadata to associate with the vertex as JSON-LD.

***

### aliases?

> `optional` **aliases**: [`AuditableItemGraphAlias`](AuditableItemGraphAlias.md)[]

Alternative aliases that can be used to identify the vertex.

***

### resources?

> `optional` **resources**: [`AuditableItemGraphResource`](AuditableItemGraphResource.md)[]

The resources attached to the vertex.

***

### edges?

> `optional` **edges**: [`AuditableItemGraphEdge`](AuditableItemGraphEdge.md)[]

Edges connected to the vertex.
