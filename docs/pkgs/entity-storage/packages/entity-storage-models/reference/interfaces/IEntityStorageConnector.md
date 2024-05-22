# Interface: IEntityStorageConnector\<T\>

Interface describing an entity storage connector.

## Extends

- `IService`

## Type parameters

• **T** = `unknown`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext**: `IRequestContext`

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

***

### query()

> **query**(`requestContext`, `conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query all the entities which match the conditions.

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
