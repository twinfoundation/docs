# Interface: IDataAssetQueryRequest

Get Request Data Asset Entities

## Properties

### body

> **body**: `object`

Request body

#### dataAsset

> **dataAsset**: [`IDataAssetDescription`](IDataAssetDescription.md)

#### query

> **query**: [`IFilteringQuery`](IFilteringQuery.md)

The query

#### cursor?

> `optional` **cursor**: `string`

Pagination details. Cursor

#### limit?

> `optional` **limit**: `number`

Pagination details. limit.
