# Interface: ITelemetryConnector

Interface describing a telemetry connector.

## Extends

- `IComponent`

## Methods

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

##### metric

[`ITelemetryMetric`](ITelemetryMetric.md)

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getMetric()

> **getMetric**(`id`): `Promise`\<\{ `metric`: [`ITelemetryMetric`](ITelemetryMetric.md); `value`: [`ITelemetryMetricValue`](ITelemetryMetricValue.md); \}\>

Get the metric details and it's most recent value.

#### Parameters

##### id

`string`

The metric id.

#### Returns

`Promise`\<\{ `metric`: [`ITelemetryMetric`](ITelemetryMetric.md); `value`: [`ITelemetryMetricValue`](ITelemetryMetricValue.md); \}\>

The metric details and it's most recent value.

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

##### metric

`Omit`\<[`ITelemetryMetric`](ITelemetryMetric.md), `"type"`\>

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### addMetricValue()

> **addMetricValue**(`id`, `value`, `customData?`): `Promise`\<`string`\>

Update metric value.

#### Parameters

##### id

`string`

The id of the metric.

##### value

The value for the update operation.

`number` | `"inc"` | `"dec"`

##### customData?

The custom data for the update operation.

#### Returns

`Promise`\<`string`\>

The created metric value id.

***

### removeMetric()

> **removeMetric**(`id`): `Promise`\<`void`\>

Remove metric.

#### Parameters

##### id

`string`

The id of the metric.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`type?`, `cursor?`, `limit?`): `Promise`\<\{ `entities`: [`ITelemetryMetric`](ITelemetryMetric.md)[]; `cursor?`: `string`; \}\>

Query the metrics.

#### Parameters

##### type?

[`MetricType`](../type-aliases/MetricType.md)

The type of the metric.

##### cursor?

`string`

The cursor to request the next chunk of entities.

##### limit?

`number`

Limit the number of entities to return.

#### Returns

`Promise`\<\{ `entities`: [`ITelemetryMetric`](ITelemetryMetric.md)[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

***

### queryValues()

> **queryValues**(`id`, `timeStart?`, `timeEnd?`, `cursor?`, `limit?`): `Promise`\<\{ `metric`: [`ITelemetryMetric`](ITelemetryMetric.md); `entities`: [`ITelemetryMetricValue`](ITelemetryMetricValue.md)[]; `cursor?`: `string`; \}\>

Query the metric values.

#### Parameters

##### id

`string`

The id of the metric.

##### timeStart?

`number`

The inclusive time as the start of the metric entries.

##### timeEnd?

`number`

The inclusive time as the end of the metric entries.

##### cursor?

`string`

The cursor to request the next chunk of entities.

##### limit?

`number`

Limit the number of entities to return.

#### Returns

`Promise`\<\{ `metric`: [`ITelemetryMetric`](ITelemetryMetric.md); `entities`: [`ITelemetryMetricValue`](ITelemetryMetricValue.md)[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.
