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

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

***

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"console"`

The namespace for the logging connector.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`ILoggingConnector.className`

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

`ILoggingConnector.log`
