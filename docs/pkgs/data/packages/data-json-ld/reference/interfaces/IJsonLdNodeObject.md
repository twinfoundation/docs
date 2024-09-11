# Interface: IJsonLdNodeObject

A node object represents zero or more properties of a node
in the graph serialized by the JSON-LD document.

## See

https://www.w3.org/TR/json-ld11/#node-objects

## Indexable

 \[`key`: `string`\]: [`IJsonLdNodePrimitive`](../type-aliases/IJsonLdNodePrimitive.md) \| [`IJsonLdNodePrimitive`](../type-aliases/IJsonLdNodePrimitive.md)[] \| [`IJsonLdLanguageMap`](IJsonLdLanguageMap.md) \| [`IJsonLdIndexMap`](IJsonLdIndexMap.md) \| [`IJsonLdIncludedBlock`](../type-aliases/IJsonLdIncludedBlock.md) \| [`IJsonLdIdMap`](IJsonLdIdMap.md) \| [`IJsonLdTypeMap`](IJsonLdTypeMap.md) \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md)\[keyof [`IJsonLdNodeObject`](IJsonLdNodeObject.md)\]

## Properties

### @context?

> `optional` **@context**: `null` \| `string` \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md) \| (`null` \| `string` \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md))[]

***

### @id?

> `optional` **@id**: `string` \| `string`[]

***

### @included?

> `optional` **@included**: [`IJsonLdIncludedBlock`](../type-aliases/IJsonLdIncludedBlock.md)

***

### @graph?

> `optional` **@graph**: [`IJsonLdNodeObject`](IJsonLdNodeObject.md) \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md)[]

***

### @nest?

> `optional` **@nest**: [`IJsonLdJsonObject`](IJsonLdJsonObject.md) \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md)[]

***

### @type?

> `optional` **@type**: `string` \| `string`[]

***

### @reverse?

> `optional` **@reverse**: `object`

#### Index signature

 \[`key`: `string`\]: [`IJsonLdKeyword`](../type-aliases/IJsonLdKeyword.md)\[`"@reverse"`\]

***

### @index?

> `optional` **@index**: `string`
