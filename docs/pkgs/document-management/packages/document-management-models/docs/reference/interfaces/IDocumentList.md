# Interface: IDocumentList

Interface describing a document entry list.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/documents/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"DocumentList"`

JSON-LD Type.

***

### documents

> **documents**: [`IDocument`](IDocument.md)[]

The list of documents.

***

### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of documents.
