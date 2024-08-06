# Class: FileEntityStorageConnector\<T\>

Class for performing entity storage operations in file.

## Type parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new FileEntityStorageConnector()

> **new FileEntityStorageConnector**\<`T`\>(`options`): [`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

Create a new instance of FileEntityStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.entitySchema**: `string`

The name of the entity schema.

• **options.config**: [`IFileEntityStorageConnectorConfig`](../interfaces/IFileEntityStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEntityStorageConnector.CLASS_NAME`

## Methods

### bootstrap()

> **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the connector by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

The response of the bootstrapping as log entries.

#### Implementation of

`IEntityStorageConnector.bootstrap`

***

### get()

> **get**(`id`, `secondaryIndex`?): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

`IEntityStorageConnector.get`

***

### set()

> **set**(`entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **entity**: `T`

The entity to set.

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

`IEntityStorageConnector.set`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **id**: `string`

The id of the entity to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IEntityStorageConnector.remove`

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Find all the entities which match the conditions.

#### Parameters

• **conditions?**: `EntityCondition`\<`T`\>

The conditions to match for the entities.

• **sortProperties?**: `object`[]

The optional sort order.

• **properties?**: keyof `T`[]

The optional properties to return, defaults to all.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `Partial`\<`T`\>[]

The entities, which can be partial if a limited keys list was provided.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`IEntityStorageConnector.query`

***

### readStore()

> `private` **readStore**(): `Promise`\<`T`[]\>

Read the store from file.

#### Returns

`Promise`\<`T`[]\>

The store.

***

### writeStore()

> `private` **writeStore**(`store`): `Promise`\<`void`\>

Write the store to the file.

#### Parameters

• **store**: `T`[]

The store to write.

#### Returns

`Promise`\<`void`\>

Nothing.
