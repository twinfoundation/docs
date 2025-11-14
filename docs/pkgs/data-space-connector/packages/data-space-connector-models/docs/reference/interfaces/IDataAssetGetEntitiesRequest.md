# Interface: IDataAssetGetEntitiesRequest

Get Request Data Asset Entities

## Properties

### query

> **query**: `object`

The parameters from the query.

#### id?

> `optional` **id**: `string`

The ID of the entity(ies) to get. (comma separated list)

#### type

> **type**: `string`

The type of the entity to get.

#### dataServiceId?

> `optional` **dataServiceId**: `string`

The Id of the data service that offers the data asset

#### datasetId?

> `optional` **datasetId**: `string`

The Id of the datasets that describes the data asset (comma separated list)

#### limit?

> `optional` **limit**: `string`

The maximum number of entities to retrieve.

#### cursor?

> `optional` **cursor**: `string`

Cursor to control pagination.
