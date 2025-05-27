# Interface: IDocumentList

Interface describing a list of document entries.

## Properties

### @context

> **@context**: \[`"https://schema.org"`, `"https://schema.twindev.org/documents/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"ItemList"`

JSON-LD Type.

***

### itemListElement

> **itemListElement**: [`IDocument`](IDocument.md)[]

The list of documents.

***

### edges?

> `optional` **edges**: `string`[]

The ids of the other vertices which are connected to the document.

***

### nextItem?

> `optional` **nextItem**: `string`

The cursor to get the next chunk of documents.
