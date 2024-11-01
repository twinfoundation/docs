# Class: CosmosDbEntityStorageConnector\<T\>

Class for performing entity storage operations using Cosmos DB.

## Type Parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new CosmosDbEntityStorageConnector()

> **new CosmosDbEntityStorageConnector**\<`T`\>(`options`): [`CosmosDbEntityStorageConnector`](CosmosDbEntityStorageConnector.md)\<`T`\>

Create a new instance of CosmosDbEntityStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.entitySchema**: `string`

The schema for the entity.

• **options.loggingConnectorType?**: `string`

The type of logging connector to use, defaults to no logging.

• **options.config**: [`ICosmosDbEntityStorageConnectorConfig`](../interfaces/ICosmosDbEntityStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`CosmosDbEntityStorageConnector`](CosmosDbEntityStorageConnector.md)\<`T`\>

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEntityStorageConnector.CLASS_NAME`

## Methods

### bootstrap()

> **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Initialize the Cosmos DB environment.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

Optional type of the logging connector.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating success.

#### Implementation of

`IEntityStorageConnector.bootstrap`

***

### getSchema()

> **getSchema**(): `IEntitySchema`\<`unknown`\>

Get the schema for the entities.

#### Returns

`IEntitySchema`\<`unknown`\>

The schema for the entities.

#### Implementation of

`IEntityStorageConnector.getSchema`

***

### get()

> **get**(`id`, `secondaryIndex`?, `conditions`?): `Promise`\<`undefined` \| `T`\>

Get an entity from Cosmos DB.

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

#### Implementation of

`IEntityStorageConnector.get`

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

The suggested number of entities to return in each chunk, in some scenarios can return a different amount.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `Partial`\<`T`\>[]

##### cursor?

> `optional` **cursor**: `string`

#### Implementation of

`IEntityStorageConnector.query`

***

### containerDelete()

> **containerDelete**(): `Promise`\<`void`\>

Delete the container.

#### Returns

`Promise`\<`void`\>

Nothing.
