# Interface: IDataAssetItemList

Interface describing a list of entities that are within a Data Asset

## Properties

### @context

> **@context**: `"https://schema.org"`

The LD Context.

***

### type

> **type**: `"ItemList"`

The type

***

### itemListElement

> **itemListElement**: `IJsonLdNodeObject`[]

The components of the Collection

***

### nextItem?

> `optional` **nextItem**: `string`

Next item cursor.
