# Interface: IAuditableItemGraphVertexList

Interface describing an auditable item graph vertex list.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| \[`"https://schema.twindev.org/aig/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphVertexList"`

JSON-LD Type.

***

### vertices

> **vertices**: [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)[]

The list of vertices.

***

### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of vertices.
