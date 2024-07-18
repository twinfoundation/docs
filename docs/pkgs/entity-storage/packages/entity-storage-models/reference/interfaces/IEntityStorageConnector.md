# Interface: IEntityStorageConnector\<T\>

Interface describing an entity storage connector.

## Extends

- `IService`

## Type parameters

• **T** = `unknown`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`requestContext`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### get()

> **get**(`id`, `secondaryIndex`?, `requestContext`?): `Promise`\<`undefined` \| `T` & `object`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`undefined` \| `T` & `object`\>

The object if it can be found or undefined, if non partitioned request then partitionId is included in items.

***

### set()

> **set**(`entity`, `requestContext`?): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **entity**: `T`

The entity to set.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

The id of the entity.

***

### remove()

> **remove**(`id`, `requestContext`?): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **id**: `string`

The id of the entity to remove.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

Query all the entities which match the conditions.

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

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `Partial`\<`T` & `object`\>[]

The entities, which can be partial if a limited keys list was provided.
If non partitioned request then partitionId is included in items.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.
