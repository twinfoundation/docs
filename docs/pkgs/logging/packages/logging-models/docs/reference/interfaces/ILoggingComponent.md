# Interface: ILoggingComponent

Interface describing a logging contract.

## Extends

- `IComponent`

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the component.

#### Parameters

##### logEntry

[`ILogEntry`](ILogEntry.md)

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`level?`, `source?`, `timeStart?`, `timeEnd?`, `cursor?`, `limit?`): `Promise`\<\{ `entities`: [`ILogEntry`](ILogEntry.md)[]; `cursor?`: `string`; \}\>

Query the log entries.

#### Parameters

##### level?

[`LogLevel`](../type-aliases/LogLevel.md)

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

`Promise`\<\{ `entities`: [`ILogEntry`](ILogEntry.md)[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.
