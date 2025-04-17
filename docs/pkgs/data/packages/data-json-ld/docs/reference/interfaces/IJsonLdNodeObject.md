# Interface: IJsonLdNodeObject

A node object represents zero or more properties of a node
in the graph serialized by the JSON-LD document.

## See

https://www.w3.org/TR/json-ld11/#node-objects

## Extends

- [`IJsonLdObject`](IJsonLdObject.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| [`IJsonLdContextDefinition`](IJsonLdContextDefinition.md) \| [`IJsonLdContextDefinitionElement`](../type-aliases/IJsonLdContextDefinitionElement.md)[] \| [`IJsonLdIdMap`](IJsonLdIdMap.md) \| `IJsonLdNodeObject` \| [`IJsonLdListObject`](IJsonLdListObject.md) \| `object` & `object` \| `object` & `object` \| `object` & `object` \| [`IJsonLdSetObject`](IJsonLdSetObject.md) \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md) \| [`IJsonLdIndexMap`](IJsonLdIndexMap.md) \| [`IJsonLdLanguageMap`](IJsonLdLanguageMap.md) \| [`IJsonLdGraphObject`](IJsonLdGraphObject.md) \| `IJsonLdNodeObject`[] \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md)[] \| \{[`key`: `string`]: `string`; \} \| [`IJsonLdTypeMap`](IJsonLdTypeMap.md) \| [`IJsonLdNodePrimitive`](../type-aliases/IJsonLdNodePrimitive.md)[]

## Properties

### @context?

> `optional` **@context**: [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@context`](IJsonLdObject.md#context)

***

### @id?

> `optional` **@id**: `string` \| `string`[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@id`](IJsonLdObject.md#id)

***

### @included?

> `optional` **@included**: [`IJsonLdIncludedBlock`](../type-aliases/IJsonLdIncludedBlock.md)

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@included`](IJsonLdObject.md#included)

***

### @graph?

> `optional` **@graph**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@graph`](IJsonLdObject.md#graph)

***

### @nest?

> `optional` **@nest**: [`IJsonLdJsonObject`](IJsonLdJsonObject.md) \| [`IJsonLdJsonObject`](IJsonLdJsonObject.md)[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@nest`](IJsonLdObject.md#nest)

***

### @type?

> `optional` **@type**: `string` \| `string`[]

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@type`](IJsonLdObject.md#type)

***

### @reverse?

> `optional` **@reverse**: `object`

#### Index Signature

\[`key`: `string`\]: `string`

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@reverse`](IJsonLdObject.md#reverse)

***

### @index?

> `optional` **@index**: `string`

#### Inherited from

[`IJsonLdObject`](IJsonLdObject.md).[`@index`](IJsonLdObject.md#index)
