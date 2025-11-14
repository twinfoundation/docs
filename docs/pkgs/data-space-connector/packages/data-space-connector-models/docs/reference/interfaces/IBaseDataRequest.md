# Interface: IBaseDataRequest

Base Data Request interface to represent a data request to a Data Space Connector App

## Properties

### type

> **type**: `string`

Type of Data Request.

***

### dataAsset

> **dataAsset**: `object`

The data asset we are referring to.

#### dataService

> **dataService**: `IServiceOfferingEntry`

The data service component of the data asset.

#### dataset

> **dataset**: `IDataResourceEntry`[]

The dataset components of the data asset.

***

### cursor?

> `optional` **cursor**: `string`

Cursor that points to the next item in the result set.

***

### limit?

> `optional` **limit**: `number`

Maximum number of entries retrieved or to be retrieved.
