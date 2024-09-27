# Interface: IAuditableItemStreamList

Interface describing an auditable item stream list.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamList"`

JSON-LD Type.

***

### streams

> **streams**: [`IAuditableItemStream`](IAuditableItemStream.md)[]

The streams.

***

### cursor?

> `optional` **cursor**: `string`

Cursor for the next chunk of streams.
