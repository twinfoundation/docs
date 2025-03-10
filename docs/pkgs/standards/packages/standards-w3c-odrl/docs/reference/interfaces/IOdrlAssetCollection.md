# Interface: IOdrlAssetCollection

Interface for ODRL Asset Collections.
An AssetCollection is a single resource representing a set of member resources,
where all members of the set will be the subject of the Rule.

## Extends

- [`IOdrlAsset`](IOdrlAsset.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdIdMap` \| `IJsonLdNodeObject` \| `IJsonLdListObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdSetObject` \| `IJsonLdJsonObject` \| `IJsonLdIndexMap` \| `IJsonLdLanguageMap` \| `IJsonLdGraphObject` \| `IJsonLdNodeObject`[] \| `IJsonLdJsonObject`[] \| \{\} \| `IJsonLdTypeMap` \| `IJsonLdNodePrimitive`[]

## Properties

### uid?

> `optional` **uid**: `string`

The unique identifier for the asset.
Should be an IRI.

#### Inherited from

[`IOdrlAsset`](IOdrlAsset.md).[`uid`](IOdrlAsset.md#uid)

***

### @type?

> `optional` **@type**: `string`

The type of the asset.
Can be used to specify additional type information.

#### Inherited from

[`IOdrlAsset`](IOdrlAsset.md).[`@type`](IOdrlAsset.md#@type)

***

### partOf?

> `optional` **partOf**: `string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md)

Reference to the asset collection this asset is part of.
Used to identify an AssetCollection that this Asset is a member of.

#### Inherited from

[`IOdrlAsset`](IOdrlAsset.md).[`partOf`](IOdrlAsset.md#partof)

***

### hasPolicy?

> `optional` **hasPolicy**: `string`

Reference to the policy that governs this asset.
Used to identify the Policy that governs this Asset.

#### Inherited from

[`IOdrlAsset`](IOdrlAsset.md).[`hasPolicy`](IOdrlAsset.md#haspolicy)

***

### source

> **source**: `string`

Reference to the source of the asset collection.
Must be an IRI that references the AssetCollection.

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Refinements applied to the asset collection.
Used to specify the refinement context under which to identify individual Asset(s)
of the complete collection. The refinement applies to the characteristics of each
member of the collection (not the resource as a whole).
