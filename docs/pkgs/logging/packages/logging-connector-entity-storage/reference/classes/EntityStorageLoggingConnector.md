# Class: EntityStorageLoggingConnector

Class for performing logging operations in entity storage.

## Implements

- `ILoggingConnector`

## Constructors

### new EntityStorageLoggingConnector()

> **new EntityStorageLoggingConnector**(`options`?): [`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

Create a new instance of EntityStorageLoggingConnector.

#### Parameters

• **options?**

The options for the connector.

• **options.logEntryStorageConnectorType?**: `string`

The type of the entity storage connector to use, defaults to "log-entry".

• **options.config?**: `ILoggingLevelsConfig`

The configuration for the logging connector.

#### Returns

[`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"entity-storage"`

The namespace for the logging connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ILoggingConnector.CLASS_NAME`

***

### \_levels

> `private` `readonly` **\_levels**: `LogLevel`[]

The log levels to capture, will default to all.

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

• **logEntry**: `ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILoggingConnector.log`

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

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
