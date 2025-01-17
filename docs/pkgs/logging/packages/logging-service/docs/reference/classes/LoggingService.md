# Class: LoggingService

Service for performing logging operations to a connector.

## Implements

- `ILoggingComponent`

## Constructors

### new LoggingService()

> **new LoggingService**(`options`?): [`LoggingService`](LoggingService.md)

Create a new instance of LoggingService.

#### Parameters

##### options?

[`ILoggingServiceConstructorOptions`](../interfaces/ILoggingServiceConstructorOptions.md)

The options for the connector.

#### Returns

[`LoggingService`](LoggingService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"logging"`

The namespace for the logging component.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ILoggingComponent.CLASS_NAME`

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

##### logEntry

`ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILoggingComponent.log`

***

### query()

> **query**(`level`?, `source`?, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `ILogEntry`[]; `cursor`: `string`; \}\>

Query the log entries.

#### Parameters

##### level?

`LogLevel`

The level of the log entries.

##### source?

`string`

The source of the log entries.

##### timeStart?

`number`

The inclusive time as the start of the log entries.

##### timeEnd?

`number`

The inclusive time as the end of the log entries.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `ILogEntry`[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

`ILoggingComponent.query`
