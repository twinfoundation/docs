# Interface: IEntityStorageComponent\<T\>

Interface describing an entity storage component.

## Extends

- `IComponent`

## Type Parameters

### T

`T` = `unknown`

## Methods

### set()

> **set**(`entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

##### entity

`T`

The entity to set.

#### Returns

`Promise`\<`void`\>

The id of the entity.

***

### get()

> **get**(`id`, `secondaryIndex?`): `Promise`\<`T` \| `undefined`\>

Get an entity.

#### Parameters

##### id

`string`

The id of the entity to get, or the index value if secondaryIndex is set.

##### secondaryIndex?

keyof `T`

Get the item using a secondary index.

#### Returns

`Promise`\<`T` \| `undefined`\>

The object if it can be found or undefined.

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

##### id

`string`

The id of the entity to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`conditions?`, `orderBy?`, `orderByDirection?`, `properties?`, `cursor?`, `limit?`): `Promise`\<\{ `entities`: `Partial`\<`T`\>[]; `cursor?`: `string`; \}\>

Query all the entities which match the conditions.

#### Parameters

##### conditions?

`EntityCondition`\<`T`\>

The conditions to match for the entities.

##### orderBy?

keyof `T`

The order for the results.

##### orderByDirection?

`SortDirection`

The direction for the order, defaults to ascending.

##### properties?

keyof `T`[]

The optional properties to return, defaults to all.

##### cursor?

`string`

The cursor to request the next chunk of entities.

##### limit?

`number`

The suggested number of entities to return in each chunk, in some scenarios can return a different amount.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<`T`\>[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.
