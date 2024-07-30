# Interface: ITelemetryValuesListRequest

Get the a list of the telemetry values.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the metric.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### timeStart?

> `optional` **timeStart**: `number`

The start time of the metrics to retrieve as a timestamp in ms.

#### timeEnd?

> `optional` **timeEnd**: `number`

The end time of the metrics to retrieve as a timestamp in ms.

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.
