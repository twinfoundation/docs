# Class: EntityStorageService\<T\>

Class for performing entity service operations.

## Type Parameters

• **T** = `any`

## Implements

- `IEntityStorageComponent`\<`T`\>

## Constructors

### new EntityStorageService()

> **new EntityStorageService**\<`T`\>(`options`): [`EntityStorageService`](EntityStorageService.md)\<`T`\>

Create a new instance of EntityStorageService.

#### Parameters

• **options**

The dependencies for the entity storage service.

• **options.entityStorageType**: `string`

The entity storage type.

• **options.config?**: [`IEntityStorageConfig`](../interfaces/IEntityStorageConfig.md)

The configuration for the service.

#### Returns

[`EntityStorageService`](EntityStorageService.md)\<`T`\>

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEntityStorageComponent.CLASS_NAME`

## Methods

### set()

> **set**(`entity`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **entity**: `T`

The entity to set.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

`IEntityStorageComponent.set`

***

### get()

> **get**(`id`, `secondaryIndex`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

`IEntityStorageComponent.get`

***

### remove()

> **remove**(`id`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **id**: `string`

The id of the entity to remove.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IEntityStorageComponent.remove`

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`object`\>

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

The suggested number of entities to return in each chunk, in some scenarios can return a different amount.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

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

#### Implementation of

`IEntityStorageComponent.query`
