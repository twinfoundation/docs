# Class: ConsoleLoggingConnector

Class for performing logging operations in the console.

## Implements

- `ILoggingConnector`

## Constructors

### new ConsoleLoggingConnector()

> **new ConsoleLoggingConnector**(`options`?): [`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

Create a new instance of ConsoleLoggingConnector.

#### Parameters

##### options?

[`IConsoleLoggingConnectorConstructorOptions`](../interfaces/IConsoleLoggingConnectorConstructorOptions.md)

The options for the logging connector.

#### Returns

[`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"console"`

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

`ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILoggingConnector.log`

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `Partial`\<`ILogEntry`\>[]; `cursor`: `string`; \}\>

Query the log entries.

#### Parameters

##### conditions?

`EntityCondition`\<`ILogEntry`\>

The conditions to match for the entities.

##### sortProperties?

`object`[]

The optional sort order.

##### properties?

keyof `ILogEntry`[]

The optional keys to return, defaults to all.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<`ILogEntry`\>[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

`ILoggingConnector.query`
