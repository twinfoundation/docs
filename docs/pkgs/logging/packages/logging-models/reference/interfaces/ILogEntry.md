# Interface: ILogEntry

Interface describing a log entry.

## Properties

### data

• `Optional` **data**: `unknown`

Optional data for the message.

---

### error

• `Optional` **error**: `IError`

Optional error details.

---

### level

• **level**: [`LogLevel`](../modules.md#loglevel)

The level of the error being logged.

---

### message

• **message**: `string`

The message.

---

### source

• **source**: `string`

The source of the log entry.

---

### ts

• `Optional` **ts**: `number`

The timestamp of the log entry, if left blank will be populated by the connector.
