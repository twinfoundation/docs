# Interface: ILogEntry

Interface describing a log entry.

## Properties

### data

• `Optional` **data**: `unknown`

Optional data for the message.

___

### error

• `Optional` **error**: `IError`

Optional error details.

___

### level

• **level**: [`LogLevel`](../modules.md#loglevel)

The level of the error being logged.

___

### message

• **message**: `string`

The message.

___

### source

• **source**: `string`

The source of the log entry.

___

### ts

• `Optional` **ts**: `number`

The timestamp of the log entry, if left blank will be populated by the connector.
