# Class: MultiLoggingConnector

Class for performing logging operations on multiple connectors.

## Implements

- [`ILoggingConnector`](../interfaces/ILoggingConnector.md)

## Constructors

### new MultiLoggingConnector()

> **new MultiLoggingConnector**(`options`): [`MultiLoggingConnector`](MultiLoggingConnector.md)

Create a new instance of MultiLoggingConnector.

#### Parameters

##### options

[`IMultiLoggingConnectorConstructorOptions`](../interfaces/IMultiLoggingConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`MultiLoggingConnector`](MultiLoggingConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"multi"`

The namespace for the logging connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ILoggingConnector.CLASS_NAME`

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

##### logEntry

[`ILogEntry`](../interfaces/ILogEntry.md)

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ILoggingConnector`](../interfaces/ILoggingConnector.md).[`log`](../interfaces/ILoggingConnector.md#log)

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `Partial`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>[]; `cursor`: `string`; \}\>

Query the log entries.

#### Parameters

##### conditions?

`EntityCondition`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>

The conditions to match for the entities.

##### sortProperties?

`object`[]

The optional sort order.

##### properties?

keyof [`ILogEntry`](../interfaces/ILogEntry.md)[]

The optional keys to return, defaults to all.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

[`ILoggingConnector`](../interfaces/ILoggingConnector.md).[`query`](../interfaces/ILoggingConnector.md#query)
