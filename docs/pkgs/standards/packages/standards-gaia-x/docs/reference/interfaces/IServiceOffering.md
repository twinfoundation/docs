# Interface: IServiceOffering

A Service offering

## Extends

- `IGaiaXEntity`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \}

## Properties

### @context

> **@context**: [`GaiaXContextType`](../type-aliases/GaiaXContextType.md)

The LD context.

#### Inherited from

`IGaiaXEntity.@context`

***

### id

> **id**: `string`

The Id.

#### Inherited from

`IGaiaXEntity.id`

***

### description?

> `optional` **description**: `string`

Description of the Gaia-X entity.

#### Inherited from

`IGaiaXEntity.description`

***

### type

> **type**: `"ServiceOffering"`

Type

***

### name

> **name**: `string`

Name of the Service Offering.

#### Overrides

`IGaiaXEntity.name`

***

### providedBy

> **providedBy**: `string` \| [`ILegalPerson`](ILegalPerson.md) \| `IJsonLdNodeObject` & `object`

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

### endpoint?

> `optional` **endpoint**: [`IEndpoint`](IEndpoint.md)

The endpoint
