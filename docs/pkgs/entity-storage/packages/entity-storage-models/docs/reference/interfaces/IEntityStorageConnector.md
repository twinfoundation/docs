# Interface: IEntityStorageConnector\<T\>

Interface describing an entity storage connector.

## Extends

- `IComponent`

## Type Parameters

• **T** = `unknown`

## Methods

### getSchema()

> **getSchema**(): `IEntitySchema`\<`unknown`\>

Get the schema for the entities.

#### Returns

`IEntitySchema`\<`unknown`\>

The schema for the entities.

***

### set()

> **set**(`entity`, `conditions`?): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **entity**: `T`

The entity to set.

• **conditions?**: `object`[]

The optional conditions to match for the entities.

#### Returns

`Promise`\<`void`\>

The id of the entity.

***

### get()

> **get**(`id`, `secondaryIndex`?, `conditions`?): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

• **conditions?**: `object`[]

The optional conditions to match for the entities.

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

***

### remove()

> **remove**(`id`, `conditions`?): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **id**: `string`

The id of the entity to remove.

• **conditions?**: `object`[]

The optional conditions to match for the entities.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

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
