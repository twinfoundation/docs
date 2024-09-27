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

### dateCreated

> **dateCreated**: `string`

The date/time of when the vertex was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the vertex was last modified.

***

### aliasIndex?

> `optional` **aliasIndex**: `string`

Combined alias index for the vertex used for querying.

***

### vertexObject?

> `optional` **vertexObject**: `IJsonLdNodeObject`

Object to associate with the vertex as JSON-LD.

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
