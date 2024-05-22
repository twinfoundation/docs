# Class: LoggingService

Service for performing logging operations to a connector.

## Implements

- `ILogging`

## Constructors

### new LoggingService()

> **new LoggingService**(`dependencies`): [`LoggingService`](LoggingService.md)

Create a new instance of LoggingService.

#### Parameters

• **dependencies**

The connectors to use.

• **dependencies.loggingConnector**: `ILoggingConnector`

The logging connector.

#### Returns

[`LoggingService`](LoggingService.md)

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

`ILogging.log`

***

### query()

> **query**(`requestContext`, `level`?, `source`?, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **level?**: `LogLevel`

The level of the log entries.

• **source?**: `string`

The source of the log entries.

• **timeStart?**: `number`

The inclusive time as the start of the log entries.

• **timeEnd?**: `number`

The inclusive time as the end of the log entries.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `ILogEntry`[]

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

`ILogging.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.
