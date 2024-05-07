# Interface: ILoggingListRequest

Get the a list of the log entries.

## Properties

### query

• `Optional` **query**: `Object`

The query parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | The optional cursor to get next chunk. |
| `level?` | [`LogLevel`](../modules.md#loglevel) | The level of the log entries to retrieve. |
| `pageSize?` | `number` | The maximum number of entities in a page. |
| `source?` | `string` | The source of the log entries to retrieve. |
| `timeEnd?` | `number` | The end time of the metrics to retrieve. |
| `timeStart?` | `number` | The start time of the metrics to retrieve. |
