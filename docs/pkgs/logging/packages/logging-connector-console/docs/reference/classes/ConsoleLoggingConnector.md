# Class: ConsoleLoggingConnector

Class for performing logging operations in the console.

## Implements

- `ILoggingConnector`

## Constructors

### Constructor

> **new ConsoleLoggingConnector**(`options?`): `ConsoleLoggingConnector`

Create a new instance of ConsoleLoggingConnector.

#### Parameters

##### options?

[`IConsoleLoggingConnectorConstructorOptions`](../interfaces/IConsoleLoggingConnectorConstructorOptions.md)

The options for the logging connector.

#### Returns

`ConsoleLoggingConnector`

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
