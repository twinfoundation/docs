# Interface: ILoggingConnector

Interface describing a logging connector.

## Extends

- `IComponent`

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

##### logEntry

[`ILogEntry`](ILogEntry.md)

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()?

> `optional` **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `Partial`\<[`ILogEntry`](ILogEntry.md)\>[]; `cursor`: `string`; \}\>

Query the log entries.

#### Parameters

##### conditions?

`EntityCondition`\<[`ILogEntry`](ILogEntry.md)\>

The conditions to match for the entities.

##### sortProperties?

`object`[]

The optional sort order.

##### properties?

keyof [`ILogEntry`](ILogEntry.md)[]

The optional keys to return, defaults to all.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<[`ILogEntry`](ILogEntry.md)\>[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.
