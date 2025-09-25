# Interface: IAddress

Address as defined by Gaia-X
https://docs.gaia-x.eu/ontology/development/classes/Address/

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \}

## Properties

### type

> **type**: `undefined` \| `"Address"`

JSON-LD @ type. In this case it is allowed to be omitted as it is usually a child node.

***

### countryCode

> **countryCode**: `string` \| `number`

Country code in ISO 3166-1 alpha2, alpha-3 or numeric format
