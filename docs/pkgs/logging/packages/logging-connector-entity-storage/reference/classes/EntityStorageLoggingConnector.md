# Class: EntityStorageLoggingConnector

Class for performing logging operations in entity storage.

## Implements

- `ILoggingConnector`

## Constructors

### new EntityStorageLoggingConnector()

> **new EntityStorageLoggingConnector**(`dependencies`, `config`?): [`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

Create a new instance of EntityStorageLoggingConnector.

#### Parameters

• **dependencies**

The dependencies for the logging connector.

• **dependencies.logEntryStorage**: `IEntityStorageConnector`\<[`LogEntry`](LogEntry.md)\>

The entity storage connector dependency.

• **config?**: `ILoggingLevelsConfig`

The configuration for the logging connector.

#### Returns

[`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

## Properties

### \_levels

> `private` `readonly` **\_levels**: `LogLevel`[]

The log levels to capture, will default to all.

## Methods

### log()

> **log**(`requestContext`, `logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **logEntry**: `ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILoggingConnector.log`

***

### query()

> **query**(`requestContext`, `conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **conditions?**: `EntityCondition`\<`ILogEntry`\>

The conditions to match for the entities.

• **sortProperties?**: `object`[]

The optional sort order.

• **properties?**: keyof `ILogEntry`[]

The optional keys to return, defaults to all.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `Partial`\<`ILogEntry`\>[]

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

`ILoggingConnector.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.
