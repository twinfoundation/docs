# Interface: ITelemetryListRequest

Get the a list of the telemetry metrics.

## Properties

### query

> **query**: `object`

The query parameters.

#### type?

> `optional` **type**: [`MetricType`](../type-aliases/MetricType.md)

The type of the metric.

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.
