# Interface: ITelemetryListRequest

Get the a list of the telemetry metrics.

## Properties

### query?

> `optional` **query**: `object`

The query parameters.

#### type?

> `optional` **type**: [`MetricType`](../type-aliases/MetricType.md)

The type of the metric.

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### limit?

> `optional` **limit**: `string`

Limit the number of entities to return.
