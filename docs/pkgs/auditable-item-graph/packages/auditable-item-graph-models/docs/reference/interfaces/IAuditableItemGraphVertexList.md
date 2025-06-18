# Interface: IAuditableItemGraphVertexList

Interface describing an auditable item graph vertex list.

## Properties

### @context

> **@context**: \[`"https://schema.org"`, `"https://schema.twindev.org/aig/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: \[`"ItemList"`, `"AuditableItemGraphVertexList"`\]

JSON-LD Type.

***

### itemListElement

> **itemListElement**: [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)[]

The list of vertices.

***

### nextItem?

> `optional` **nextItem**: `string`

The cursor to get the next chunk of vertices.
