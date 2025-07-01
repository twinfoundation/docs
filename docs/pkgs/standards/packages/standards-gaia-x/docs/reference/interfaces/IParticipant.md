# Interface: IParticipant

A Legal Person participating in the ecosystem

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

The participant Id.

***

### type

> **type**: `"LegalPerson"`

JSON-LD type.

***

### registrationNumber

> **registrationNumber**: [`IRegistrationNumber`](IRegistrationNumber.md)

The legal registration number.

***

### legalName

> **legalName**: `string`

The legal name.

***

### legalAddress

> **legalAddress**: [`IAddress`](IAddress.md)

Legal Address
