# Interface: IJsonLdObject

An object represents the pre-defined properties of the node object
in the graph serialized by the JSON-LD document.

## See

https://www.w3.org/TR/json-ld11/#node-objects

## Extended by

- [`IJsonLdNodeObject`](IJsonLdNodeObject.md)

## Properties

### @context?

> `optional` **@context**: [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

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

#### Index Signature

 \[`key`: `string`\]: [`IJsonLdKeyword`](../type-aliases/IJsonLdKeyword.md)\[`"@reverse"`\]

***

### @index?

> `optional` **@index**: `string`
