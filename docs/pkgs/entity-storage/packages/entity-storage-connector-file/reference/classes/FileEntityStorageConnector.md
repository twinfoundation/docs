# Class: FileEntityStorageConnector\<T\>

Class for performing entity storage operations in file.

## Type parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new FileEntityStorageConnector()

> **new FileEntityStorageConnector**\<`T`\>(`dependencies`, `entitySchema`, `config`): [`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

Create a new instance of FileEntityStorageConnector.

#### Parameters

• **dependencies**

The dependencies for the connector.

• **dependencies.logging**: `ILogging`

The logging contract.

• **entitySchema**: `IEntitySchema`\<`T`\>

The schema for the entity.

• **config**: [`IFileEntityStorageConnectorConfig`](../interfaces/IFileEntityStorageConnectorConfig.md)

The configuration for the entity storage connector.

#### Returns

[`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

## Methods

### bootstrap()

> **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the connector by creating and initializing any resources it needs.

#### Parameters

• **requestContext**: `IRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

The response of the bootstrapping as log entries.

#### Implementation of

`IEntityStorageConnector.bootstrap`

***

### get()

> **get**(`requestContext`, `id`, `secondaryIndex`?): `Promise`\<`undefined` \| `T` & `object`\>

Get an entity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

#### Returns

`Promise`\<`undefined` \| `T` & `object`\>

The object if it can be found or undefined, if request context was wildcard then tenantId is also included.

#### Implementation of

`IEntityStorageConnector.get`

***

### set()

> **set**(`requestContext`, `entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **entity**: `T`

The entity to set.

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

`IEntityStorageConnector.set`

***

### remove()

> **remove**(`requestContext`, `id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the entity to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IEntityStorageConnector.remove`

***

### query()

> **query**(`requestContext`, `conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Find all the entities which match the conditions.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

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

> **entities**: `Partial`\<`T` & `object`\>[]

The entities, which can be partial if a limited keys list was provided.
If the request context was wildcard then tenantId is also included.

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

### readTenantIndex()

> `private` **readTenantIndex**(): `Promise`\<`string`[]\>

Read the tenant index from file.

#### Returns

`Promise`\<`string`[]\>

The tenant index.

***

### writeTenantIndex()

> `private` **writeTenantIndex**(`tenantIds`): `Promise`\<`void`\>

Write the tenant index to the file.

#### Parameters

• **tenantIds**: `string`[]

The tenant ids to write in the index.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### readTenantStore()

> `private` **readTenantStore**(`tenantId`): `Promise`\<`T`[]\>

Read the store from file.

#### Parameters

• **tenantId**: `string`

The tenant id to read the store for.

#### Returns

`Promise`\<`T`[]\>

The store for the tenant.

***

### writeTenantStore()

> `private` **writeTenantStore**(`tenantId`, `store`): `Promise`\<`void`\>

Write the store to the file.

#### Parameters

• **tenantId**: `string`

The tenant id to write the store for.

• **store**: `T`[]

The store to write.

#### Returns

`Promise`\<`void`\>

Nothing.
