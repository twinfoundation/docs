# Interface: ILegalPerson

A Legal Person as defined by Gaia-X.

## See

https://docs.gaia-x.eu/ontology/development/classes/LegalPerson/.

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

### name?

> `optional` **name**: `string`

Human readable Name.

#### Inherited from

`IGaiaXEntity.name`

***

### description?

> `optional` **description**: `string`

Description of the Gaia-X entity.

#### Inherited from

`IGaiaXEntity.description`

***

### type

> **type**: `"LegalPerson"`

JSON-LD type.

***

### registrationNumber

> **registrationNumber**: [`IRegistrationNumber`](IRegistrationNumber.md)

The legal registration number.

#### See

https://docs.gaia-x.eu/ontology/development/slots/registrationNumber/

***

### legalName

> **legalName**: `string`

The legal name.

***

### legalAddress

> **legalAddress**: [`IAddress`](IAddress.md)

Legal Address

#### See

https://docs.gaia-x.eu/ontology/development/slots/legalAddress/

***

### headquartersAddress?

> `optional` **headquartersAddress**: [`IAddress`](IAddress.md)

Headquarters address.

#### See

https://docs.gaia-x.eu/ontology/development/slots/headquartersAddress/

***

### parentOrganizationOf?

> `optional` **parentOrganizationOf**: `IJsonLdNodeObject` & `object`[]

Parent organization.

#### See

https://docs.gaia-x.eu/ontology/development/slots/parentOrganizationOf/

***

### subOrganizationOf?

> `optional` **subOrganizationOf**: `IJsonLdNodeObject` & `object`[]

Sub organization of.

#### See

https://docs.gaia-x.eu/ontology/development/slots/parentSubOrganizationOf
