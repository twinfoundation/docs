# Class: ConsoleLoggingConnector

Class for performing logging operations in the console.

## Implements

- `ILoggingConnector`

## Constructors

### new ConsoleLoggingConnector()

> **new ConsoleLoggingConnector**(`config`?): [`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

Create a new instance of ConsoleLoggingConnector.

#### Parameters

• **config?**: `ILoggingLevelsConfig`

The configuration for the logging connector.

#### Returns

[`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

## Properties

### \_lastGroup?

> `private` `optional` **\_lastGroup**: `string`

The last group identity.

***

### \_levels

> `private` `readonly` **\_levels**: `LogLevel`[]

The log levels to display, will default to all.

## Methods

### handleGroup()

> `private` **handleGroup**(`group`): `void`

Handle a group.

#### Parameters

• **group**: `string`

The group.

#### Returns

`void`

***

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

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### entities

> **entities**: `Partial`\<`ILogEntry`\>[]

The entities, which can be partial if a limited keys list was provided.

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

***

### stringToColor()

> `private` **stringToColor**(`str`): `string`

Convert a string to a color.

#### Parameters

• **str**: `string`

The string to convert.

#### Returns

`string`

The color.
