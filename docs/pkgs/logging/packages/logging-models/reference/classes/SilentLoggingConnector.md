# Class: SilentLoggingConnector

Class for performing logging operations to nowhere.

## Implements

- [`ILoggingConnector`](../interfaces/ILoggingConnector.md)

## Constructors

### new SilentLoggingConnector()

> **new SilentLoggingConnector**(): [`SilentLoggingConnector`](SilentLoggingConnector.md)

#### Returns

[`SilentLoggingConnector`](SilentLoggingConnector.md)

## Methods

### log()

> **log**(`requestContext`, `logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **logEntry**: [`ILogEntry`](../interfaces/ILogEntry.md)

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ILoggingConnector`](../interfaces/ILoggingConnector.md).[`log`](../interfaces/ILoggingConnector.md#log)

***

### query()

> **query**(`requestContext`, `conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **conditions?**: `EntityCondition`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>

The conditions to match for the entities.

• **sortProperties?**: `object`[]

The optional sort order.

• **properties?**: keyof [`ILogEntry`](../interfaces/ILogEntry.md)[]

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

> **entities**: `Partial`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>[]

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

[`ILoggingConnector`](../interfaces/ILoggingConnector.md).[`query`](../interfaces/ILoggingConnector.md#query)

#### Throws

NotImplementedError if the implementation does not support retrieval.
