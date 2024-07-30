# Interface: ITelemetryUpdateMetricRequest

Update a telemetry entry.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the metric.

***

### body

> **body**: `object`

The data to be used in the update.

#### label

> **label**: `string`

The label of the metric.

#### description?

> `optional` **description**: `string`

The description of the metric.

#### unit?

> `optional` **unit**: `string`

The unit of the metric.
