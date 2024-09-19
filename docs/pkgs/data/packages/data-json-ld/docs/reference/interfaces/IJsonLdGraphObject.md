# Interface: IJsonLdGraphObject

A graph object represents a named graph, which MAY include an explicit graph name.

## See

https://www.w3.org/TR/json-ld11/#graph-objects

## Properties

### @graph

> **@graph**: [`IJsonLdNodeObject`](IJsonLdNodeObject.md) \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md)[]

***

### @index?

> `optional` **@index**: `string`

***

### @id?

> `optional` **@id**: `string` \| `string`[]

***

### @context?

> `optional` **@context**: `null` \| `string` \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md) \| (`null` \| `string` \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md))[]
