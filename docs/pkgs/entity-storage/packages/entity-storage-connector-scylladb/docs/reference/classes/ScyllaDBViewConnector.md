# Class: ScyllaDBViewConnector\<T\>

Manage entities using ScyllaDB Views.

## Extends

- `AbstractScyllaDBConnector`\<`T`\>

## Type Parameters

### T

`T`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### Constructor

> **new ScyllaDBViewConnector**\<`T`\>(`options`): `ScyllaDBViewConnector`\<`T`\>

Create a new instance of ScyllaDBViewConnector.

#### Parameters

##### options

[`IScyllaDBViewConnectorConstructorOptions`](../interfaces/IScyllaDBViewConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`ScyllaDBViewConnector`\<`T`\>

#### Overrides

`AbstractScyllaDBConnector<T>.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEntityStorageConnector.CLASS_NAME`

#### Overrides

`AbstractScyllaDBConnector.CLASS_NAME`

## Methods

### getSchema()

> **getSchema**(): `IEntitySchema`

Get the schema for the entities.

#### Returns

`IEntitySchema`

The schema for the entities.

#### Implementation of

`IEntityStorageConnector.getSchema`

#### Inherited from

`AbstractScyllaDBConnector.getSchema`

***

### get()

> **get**(`id`, `secondaryIndex?`, `conditions?`): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

##### id

`string`

The id of the entity to get.

##### secondaryIndex?

keyof `T`

Get the item using a secondary index.

##### conditions?

`object`[]

The optional conditions to match for the entities.

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

`IEntityStorageConnector.get`

#### Inherited from

`AbstractScyllaDBConnector.get`

***

### query()

> **query**(`conditions?`, `sortProperties?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<\{ `entities`: `Partial`\<`T`\>[]; `cursor?`: `string`; \}\>

Find all the entities which match the conditions.

#### Parameters

##### conditions?

`EntityCondition`\<`T`\>

The conditions to match for the entities.

##### sortProperties?

`object`[]

The optional sort order.

##### properties?

keyof `T`[]

The optional properties to return, defaults to all.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The suggested number of entities to return in each chunk, in some scenarios can return a different amount.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<`T`\>[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IEntityStorageConnector.query`

#### Inherited from

`AbstractScyllaDBConnector.query`

***

### bootstrap()

> **bootstrap**(`nodeLoggingComponentType?`): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Implementation of

`IEntityStorageConnector.bootstrap`

***

### set()

> **set**(`entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

##### entity

`T`

The entity to set.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IEntityStorageConnector.set`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Delete the entity.

#### Parameters

##### id

`string`

The id of the entity to remove.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IEntityStorageConnector.remove`
