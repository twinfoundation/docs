# Interface: ITelemetryAddMetricValueRequest

Add a telemetry metric value.

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

#### value

> **value**: `number` \| `"inc"` \| `"dec"`

The value for the update operation.

#### customData?

> `optional` **customData**: `object`

The custom data for the update operation.

##### Index Signature

\[`key`: `string`\]: `unknown`
