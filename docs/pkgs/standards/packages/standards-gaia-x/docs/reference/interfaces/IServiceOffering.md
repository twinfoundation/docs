# Interface: IServiceOffering

A Service offering

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### @context

> **@context**: [`GaiaXContextType`](../type-aliases/GaiaXContextType.md)

The LD context

#### Overrides

`IJsonLdNodeObject.@context`

***

### id

> **id**: `string`

Id

***

### type

> **type**: `"ServiceOffering"`

Type

***

### description?

> `optional` **description**: `string`

Description

***

### name

> **name**: `string`

Name

***

### providedBy

> **providedBy**: `string` \| [`IParticipant`](IParticipant.md) \| `IJsonLdNodeObject` & `object`

Participant that provides the offering

***

### servicePolicy

> **servicePolicy**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

ODRL policy associated to the service offering

***

### aggregationOfResources?

> `optional` **aggregationOfResources**: `string`[] \| [`IDataResource`](IDataResource.md)[] \| `IJsonLdNodeObject` & `object`

Resources aggregated
It is supported different representations, inline,
by reference both providing the URI or a partial JSON-LD Node object

***

### endpoint

> **endpoint**: [`IEndpoint`](IEndpoint.md)

The endpoint
