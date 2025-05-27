# Interface: IAuditableItemStreamEntryList

Interface describing an auditable item stream entries list.

## Properties

### @context

> **@context**: \[`"https://schema.org"`, `"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"ItemList"`

JSON-LD Type.

***

### itemListElement

> **itemListElement**: [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)[]

The entries in the stream.

***

### nextItem?

> `optional` **nextItem**: `string`

Cursor for the next chunk of entries.
