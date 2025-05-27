# Interface: IDataResource

A Data Resource as defined by Gaia-X.
See also W3C DCAT Dataset https://www.w3.org/TR/vocab-dcat-3/.

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdIdMap` \| `IJsonLdNodeObject` \| `IJsonLdListObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdSetObject` \| `IJsonLdJsonObject` \| `IJsonLdIndexMap` \| `IJsonLdLanguageMap` \| `IJsonLdGraphObject` \| `IJsonLdNodeObject`[] \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \} \| `IJsonLdTypeMap` \| `IJsonLdNodePrimitive`[]

## Properties

### @context

> **@context**: [`GaiaXContextType`](../type-aliases/GaiaXContextType.md)

The LD Context

#### Overrides

`IJsonLdNodeObject.@context`

***

### id

> **id**: `string`

Subject Id

***

### type

> **type**: `"DataResource"`

Subject type

***

### description?

> `optional` **description**: `string`

Description

***

### name

> **name**: `string`

The Resource Name

***

### exposedThrough

> **exposedThrough**: `string` \| [`IDataExchangeComponent`](IDataExchangeComponent.md) \| `IJsonLdNodeObject` & `object`

Exposed through a Data Exchange Component.
'string' in case just an Id pointing to the Data Exchange Component is supplied
the third case covers the idiom where a JSON-LD Node is supplied with id and type.

***

### producedBy

> **producedBy**: `string` \| [`IParticipant`](IParticipant.md)

Who is the data producer

***

### license

> **license**: `string`

Pointer (URL) to the license

***

### copyrightOwnedBy

> **copyrightOwnedBy**: `string` \| [`IParticipant`](IParticipant.md)

Copyright owner

***

### resourcePolicy

> **resourcePolicy**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

ODRL Policy
