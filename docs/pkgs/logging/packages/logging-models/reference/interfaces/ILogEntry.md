# Interface: ILogEntry

Interface describing a log entry.

## Properties

### data?

> `optional` **data**: `unknown`

Optional data for the message.

***

### error?

> `optional` **error**: `IError`

Optional error details.

***

### level

> **level**: [`LogLevel`](../type-aliases/LogLevel.md)

The level of the error being logged.

***

### message

> **message**: `string`

The message.

***

### source

> **source**: `string`

The source of the log entry.

***

### ts?

> `optional` **ts**: `number`

The timestamp of the log entry, if left blank will be populated by the connector.
