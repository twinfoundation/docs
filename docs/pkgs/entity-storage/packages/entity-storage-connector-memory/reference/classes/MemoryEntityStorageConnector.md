# Class: MemoryEntityStorageConnector\<T\>

Class for performing entity storage operations in-memory.

## Type parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new MemoryEntityStorageConnector()

> **new MemoryEntityStorageConnector**\<`T`\>(`options`): [`MemoryEntityStorageConnector`](MemoryEntityStorageConnector.md)\<`T`\>

Create a new instance of MemoryEntityStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.entitySchema**: `string`

The schema for the entity.

#### Returns

[`MemoryEntityStorageConnector`](MemoryEntityStorageConnector.md)\<`T`\>

## Methods

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

### getStore()

> **getStore**(`tenantId`): `undefined` \| `T`[]

Get the memory store for the specified tenant.

#### Parameters

• **tenantId**: `string`

The tenant id.

#### Returns

`undefined` \| `T`[]

The store.
