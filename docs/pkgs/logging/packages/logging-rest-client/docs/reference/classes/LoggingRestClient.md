# Class: LoggingRestClient

Client for performing logging through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `ILoggingComponent`

## Constructors

### Constructor

> **new LoggingRestClient**(`config`): `LoggingRestClient`

Create a new instance of LoggingRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`LoggingRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`ILoggingComponent.className`

***

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

> **query**(`level?`, `source?`, `timeStart?`, `timeEnd?`, `cursor?`, `limit?`): `Promise`\<\{ `entities`: `ILogEntry`[]; `cursor?`: `string`; \}\>

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

The cursor to request the next chunk of entities.

##### limit?

`number`

Limit the number of entities to return.

#### Returns

`Promise`\<\{ `entities`: `ILogEntry`[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`ILoggingComponent.query`
