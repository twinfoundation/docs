# Interface: IBlobStorageEntryList

Interface describing an blob storage entry list.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/blob-storage/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"BlobStorageEntryList"`

JSON-LD Type.

***

### entries

> **entries**: [`IBlobStorageEntry`](IBlobStorageEntry.md)[]

The list of entries.

***

### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of entries.
