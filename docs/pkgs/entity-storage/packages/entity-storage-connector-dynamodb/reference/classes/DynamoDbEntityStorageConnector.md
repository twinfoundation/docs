# Class: DynamoDbEntityStorageConnector\<T\>

Class for performing entity storage operations using Dynamo DB.

## Type parameters

• **T** = `unknown`

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### new DynamoDbEntityStorageConnector()

> **new DynamoDbEntityStorageConnector**\<`T`\>(`options`): [`DynamoDbEntityStorageConnector`](DynamoDbEntityStorageConnector.md)\<`T`\>

Create a new instance of DynamoDbEntityStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.entitySchema**: `string`

The schema for the entity.

• **options.loggingConnectorType?**: `string`

The type of logging connector to use, defaults to no logging.

• **options.config**: [`IDynamoDbEntityStorageConnectorConfig`](../interfaces/IDynamoDbEntityStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`DynamoDbEntityStorageConnector`](DynamoDbEntityStorageConnector.md)\<`T`\>

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEntityStorageConnector.CLASS_NAME`

## Methods

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

### get()

> **get**(`id`, `secondaryIndex`?): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

• **id**: `string`

The id of the entity to get, or the index value if secondaryIndex is set.

• **secondaryIndex?**: keyof `T`

Get the item using a secondary index.

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

`IEntityStorageConnector.get`

***

### set()

> **set**(`entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

• **entity**: `T`

The entity to set.

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

`IEntityStorageConnector.set`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

• **id**: `string`

The id of the entity to remove.

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

The maximum number of entities in a page.

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

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`IEntityStorageConnector.query`

***

### tableDelete()

> **tableDelete**(): `Promise`\<`void`\>

Delete the table.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### buildQueryParameters()

> `private` **buildQueryParameters**(`objectPath`, `condition`, `attributeNames`, `attributeValues`): `object`

Create an SQL condition clause.

#### Parameters

• **objectPath**: `string`

The path for the nested object.

• **condition**: `undefined` \| `EntityCondition`\<`T`\>

The conditions to create the query from.

• **attributeNames**

The attribute names to use in the query.

• **attributeValues**

The attribute values to use in the query.

#### Returns

`object`

The condition clause.

##### keyCondition

> **keyCondition**: `string`

##### filterCondition

> **filterCondition**: `string`

***

### mapComparisonOperator()

> `private` **mapComparisonOperator**(`objectPath`, `comparator`, `type`, `attributeNames`, `attributeValues`): `string`

Map the framework comparison operators to those in DynamoDB.

#### Parameters

• **objectPath**: `string`

The prefix to use for the condition.

• **comparator**: `IComparator`

The operator to map.

• **type**: `undefined` \| `EntitySchemaPropertyType`

The type of the property.

• **attributeNames**

The attribute names to use in the query.

• **attributeValues**

The attribute values to use in the query.

#### Returns

`string`

The comparison expression.

#### Throws

GeneralError if the comparison operator is not supported.

***

### populateAttributeNames()

> `private` **populateAttributeNames**(`name`, `attributeNames`): `string`

Create a unique name for the attribute.

#### Parameters

• **name**: `string`

The name to create a unique name for.

• **attributeNames**

The attribute names to use in the query.

#### Returns

`string`

The unique name.

***

### mapConditionalOperator()

> `private` **mapConditionalOperator**(`operator`?): `string`

Map the framework conditional operators to those in DynamoDB.

#### Parameters

• **operator?**: `LogicalOperator`

The operator to map.

#### Returns

`string`

The conditional operator.

#### Throws

GeneralError if the conditional operator is not supported.
