# Interface: IOdrlAsset

Interface for ODRL Assets.

## Extends

- `IJsonLdNodeObject`

## Extended by

- [`IOdrlAssetCollection`](IOdrlAssetCollection.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdIdMap` \| `IJsonLdNodeObject` \| `IJsonLdListObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdSetObject` \| `IJsonLdJsonObject` \| `IJsonLdIndexMap` \| `IJsonLdLanguageMap` \| `IJsonLdGraphObject` \| `IJsonLdNodeObject`[] \| `IJsonLdJsonObject`[] \| \{\} \| `IJsonLdTypeMap` \| `IJsonLdNodePrimitive`[]

## Properties

### uid?

> `optional` **uid**: `string`

The unique identifier for the asset.
Should be an IRI.

***

### @type?

> `optional` **@type**: `string`

The type of the asset.
Can be used to specify additional type information.

#### Overrides

`IJsonLdNodeObject.@type`

***

### partOf?

> `optional` **partOf**: `string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md)

Reference to the asset collection this asset is part of.
Used to identify an AssetCollection that this Asset is a member of.

***

### hasPolicy?

> `optional` **hasPolicy**: `string`

Reference to the policy that governs this asset.
Used to identify the Policy that governs this Asset.
