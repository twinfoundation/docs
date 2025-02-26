# Interface: IAuditableItemStreamList

Interface describing an auditable item stream list.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamList"`

JSON-LD Type.

***

### itemStreams

> **itemStreams**: [`IAuditableItemStream`](IAuditableItemStream.md)[]

The item streams.

***

### cursor?

> `optional` **cursor**: `string`

Cursor for the next chunk of streams.
