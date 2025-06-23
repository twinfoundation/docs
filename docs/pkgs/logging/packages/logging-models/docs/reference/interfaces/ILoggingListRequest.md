# Interface: ILoggingListRequest

Get the a list of the log entries.

## Properties

### query?

> `optional` **query**: `object`

The query parameters.

#### level?

> `optional` **level**: [`LogLevel`](../type-aliases/LogLevel.md)

The level of the log entries to retrieve.

#### source?

> `optional` **source**: `string`

The source of the log entries to retrieve.

#### timeStart?

> `optional` **timeStart**: `string` \| `number`

The start time of the metrics to retrieve as a timestamp in ms.

#### timeEnd?

> `optional` **timeEnd**: `string` \| `number`

The end time of the metrics to retrieve as a timestamp in ms.

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `string` \| `number`

The maximum number of entities in a page.
