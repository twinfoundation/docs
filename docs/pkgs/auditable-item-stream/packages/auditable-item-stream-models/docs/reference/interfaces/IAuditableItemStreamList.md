# Interface: IAuditableItemStreamList

Interface describing an auditable item stream list.

## Properties

### @context

> **@context**: \[`"https://schema.org"`, `"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: \[`"ItemList"`, `"AuditableItemStreamList"`\]

JSON-LD Type.

***

### itemListElement

> **itemListElement**: [`IAuditableItemStream`](IAuditableItemStream.md)[]

The item streams.

***

### nextItem?

> `optional` **nextItem**: `string`

Cursor for the next chunk of streams.
