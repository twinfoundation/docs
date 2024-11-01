# Class: ScyllaDBTableConnector\<T\>

Store entities using ScyllaDB.

## Extends

- `AbstractScyllaDBConnector`\<`T`\>

## Type Parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new ScyllaDBTableConnector()

> **new ScyllaDBTableConnector**\<`T`\>(`options`): [`ScyllaDBTableConnector`](ScyllaDBTableConnector.md)\<`T`\>

Create a new instance of ScyllaDBTableConnector.

#### Parameters

• **options**

The options for the connector.

• **options.loggingConnectorType?**: `string`

The type of logging connector to use, defaults to "logging".

• **options.entitySchema**: `string`

The name of the entity schema.

• **options.config**: [`IScyllaDBTableConfig`](../interfaces/IScyllaDBTableConfig.md)

The configuration for the connector.

#### Returns

[`ScyllaDBTableConnector`](ScyllaDBTableConnector.md)\<`T`\>

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

> **getSchema**(): `IEntitySchema`\<`unknown`\>

Get the schema for the entities.

#### Returns

`IEntitySchema`\<`unknown`\>

The schema for the entities.

#### Implementation of

`IEntityStorageConnector.getSchema`

#### Inherited from

`AbstractScyllaDBConnector.getSchema`

***

### get()

> **get**(`id`, `secondaryIndex`?, `conditions`?): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

• **conditions?**: `object`[]

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

#### Implementation of

`IEntityStorageConnector.query`

#### Inherited from

`AbstractScyllaDBConnector.query`

***

### bootstrap()

> **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Implementation of

`IEntityStorageConnector.bootstrap`

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

#### Implementation of

`IEntityStorageConnector.set`

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

#### Implementation of

`IEntityStorageConnector.remove`

***

### dropTable()

> **dropTable**(): `Promise`\<`void`\>

Drops table.

#### Returns

`Promise`\<`void`\>

***

### truncateTable()

> **truncateTable**(): `Promise`\<`void`\>

Truncates (clear) table.

#### Returns

`Promise`\<`void`\>
