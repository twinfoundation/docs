# Interface: IAuditableItemStreamEntryList

Interface describing an auditable item stream entries list.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamEntryList"`

JSON-LD Type.

***

### entries

> **entries**: [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)[]

The entries in the stream.

***

### cursor?

> `optional` **cursor**: `string`

Cursor for the next chunk of entries.
