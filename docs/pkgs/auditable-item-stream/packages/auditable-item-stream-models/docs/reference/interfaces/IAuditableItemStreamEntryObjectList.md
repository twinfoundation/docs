# Interface: IAuditableItemStreamEntryObjectList

Interface describing an auditable item stream entries object list.

## Properties

### @context

> **@context**: \[`"https://schema.org"`, `"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: \[`"ItemList"`, `"AuditableItemStreamEntryObjectList"`\]

JSON-LD Type.

***

### itemListElement

> **itemListElement**: `IJsonLdNodeObject`[]

The entry objects in the stream.

***

### nextItem?

> `optional` **nextItem**: `string`

Cursor for the next chunk of entry objects.
