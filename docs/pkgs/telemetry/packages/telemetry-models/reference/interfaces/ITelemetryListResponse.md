# Interface: ITelemetryListResponse

Response for telemetry list request.

## Properties

### body

> **body**: `object`

The response payload.

#### entities

> **entities**: [`ITelemetryMetric`](ITelemetryMetric.md)[]

The metrics.

#### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

#### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

#### totalEntities

> **totalEntities**: `number`

Total number of metric values length.
