# Interface: IJsonLdNodeObject

A node object represents zero or more properties of a node
in the graph serialized by the JSON-LD document.

## See

https://www.w3.org/TR/json-ld11/#node-objects

## Extends

- [`IJsonLdObject`](IJsonLdObject.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md) \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md) \| [`IJsonLdContextDefinitionElement`](../type-aliases/IJsonLdContextDefinitionElement.md)[] \| `object` & `object` \| `object` & `object` \| `object` & `object` \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md)[] \| [`IJsonLdGraphObject`](IJsonLdGraphObject.md) \| [`IJsonLdListObject`](IJsonLdListObject.md) \| [`IJsonLdSetObject`](IJsonLdSetObject.md) \| [`IJsonLdNodePrimitive`](../type-aliases/IJsonLdNodePrimitive.md)[] \| [`IJsonLdLanguageMap`](IJsonLdLanguageMap.md) \| [`IJsonLdIndexMap`](IJsonLdIndexMap.md) \| [`IJsonLdIdMap`](IJsonLdIdMap.md) \| [`IJsonLdTypeMap`](IJsonLdTypeMap.md) \| \{\} \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md) \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md)[]

## Properties

### @context?

> `optional` **@context**: [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@context`](IJsonLdObject.md#@context)

***

### @id?

> `optional` **@id**: `string` \| `string`[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@id`](IJsonLdObject.md#@id)

***

### @included?

> `optional` **@included**: [`IJsonLdIncludedBlock`](../type-aliases/IJsonLdIncludedBlock.md)

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@included`](IJsonLdObject.md#@included)

***

### @graph?

> `optional` **@graph**: [`IJsonLdNodeObject`](IJsonLdNodeObject.md) \| [`IJsonLdNodeObject`](IJsonLdNodeObject.md)[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@graph`](IJsonLdObject.md#@graph)

***

### @nest?

> `optional` **@nest**: [`IJsonLdJsonObject`](IJsonLdJsonObject.md) \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md)[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@nest`](IJsonLdObject.md#@nest)

***

### @type?

> `optional` **@type**: `string` \| `string`[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@type`](IJsonLdObject.md#@type)

***

### @reverse?

> `optional` **@reverse**: `object`

#### Index Signature

\[`key`: `string`\]: `string`

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@reverse`](IJsonLdObject.md#@reverse)

***

### @index?

> `optional` **@index**: `string`

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@index`](IJsonLdObject.md#@index)
