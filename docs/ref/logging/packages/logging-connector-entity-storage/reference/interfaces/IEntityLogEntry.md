# Interface: IEntityLogEntry

Interface describing a log entry.

## Properties

### data

• `Optional` **data**: `string`

JSON data for the message.

---

### error

• `Optional` **error**: `string`

JSON version of flattened error array.

---

### id

• **id**: `string`

The id.

---

### level

• **level**: `LogLevel`

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

• **ts**: `number`

The timestamp of the log entry.
