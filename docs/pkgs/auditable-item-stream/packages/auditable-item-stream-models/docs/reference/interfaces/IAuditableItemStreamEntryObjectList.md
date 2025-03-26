# Interface: IAuditableItemStreamEntryObjectList

Interface describing an auditable item stream entries object list.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamEntryObjectList"`

JSON-LD Type.

***

### entryObjects

> **entryObjects**: `IJsonLdNodeObject`[]

The entry objects in the stream.

***

### cursor?

> `optional` **cursor**: `string`

Cursor for the next chunk of entry objects.
