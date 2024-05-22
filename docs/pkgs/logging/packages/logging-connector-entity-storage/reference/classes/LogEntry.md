# Class: LogEntry

Call defining a log entry.

## Constructors

### new LogEntry()

> **new LogEntry**(): [`LogEntry`](LogEntry.md)

#### Returns

[`LogEntry`](LogEntry.md)

## Properties

### id

> **id**: `string`

The id.

***

### level

> **level**: `LogLevel`

The level of the error being logged.

***

### source

> **source**: `string`

The source of the log entry.

***

### ts

> **ts**: `number`

The timestamp of the log entry.

***

### message

> **message**: `string`

The message.

***

### error?

> `optional` **error**: `string`

JSON version of flattened error array.

***

### data?

> `optional` **data**: `string`

JSON data for the message.
