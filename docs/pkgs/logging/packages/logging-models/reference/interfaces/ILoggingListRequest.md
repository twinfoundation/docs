# Interface: ILoggingListRequest

Get the a list of the log entries.

## Properties

### query?

> `optional` **query**: `object`

The query parameters.

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### level?

> `optional` **level**: [`LogLevel`](../type-aliases/LogLevel.md)

The level of the log entries to retrieve.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.

#### source?

> `optional` **source**: `string`

The source of the log entries to retrieve.

#### timeEnd?

> `optional` **timeEnd**: `number`

The end time of the metrics to retrieve as a timestamp in ms.

#### timeStart?

> `optional` **timeStart**: `number`

The start time of the metrics to retrieve as a timestamp in ms.
