# Interface: ITelemetryValuesListResponse

Response for telemetry list request.

## Properties

### body

> **body**: `object`

The response payload.

#### metric

> **metric**: [`ITelemetryMetric`](ITelemetryMetric.md)

The main metric details.

#### entities

> **entities**: [`ITelemetryMetricValue`](ITelemetryMetricValue.md)[]

The metric values.

#### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.
