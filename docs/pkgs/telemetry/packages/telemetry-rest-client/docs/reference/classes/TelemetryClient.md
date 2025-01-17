# Class: TelemetryClient

Client for performing telemetry through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `ITelemetryComponent`

## Constructors

### new TelemetryClient()

> **new TelemetryClient**(`config`): [`TelemetryClient`](TelemetryClient.md)

Create a new instance of TelemetryClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`TelemetryClient`](TelemetryClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `TelemetryClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`ITelemetryComponent.CLASS_NAME`

## Methods

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

##### metric

`ITelemetryMetric`

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryComponent.createMetric`

***

### getMetric()

> **getMetric**(`id`): `Promise`\<\{ `metric`: `ITelemetryMetric`; `value`: `ITelemetryMetricValue`; \}\>

Get the metric details and it's most recent value.

#### Parameters

##### id

`string`

The metric id.

#### Returns

`Promise`\<\{ `metric`: `ITelemetryMetric`; `value`: `ITelemetryMetricValue`; \}\>

The metric details and it's most recent value.

#### Implementation of

`ITelemetryComponent.getMetric`

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

##### metric

`Omit`\<`ITelemetryMetric`, `"type"`\>

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryComponent.updateMetric`

***

### addMetricValue()

> **addMetricValue**(`id`, `value`, `customData`?): `Promise`\<`string`\>

Add a metric value.

#### Parameters

##### id

`string`

The id of the metric.

##### value

The value for the add operation.

`number` | `"inc"` | `"dec"`

##### customData?

The custom data for the add operation.

#### Returns

`Promise`\<`string`\>

The created metric value id.

#### Implementation of

`ITelemetryComponent.addMetricValue`

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

#### Implementation of

`ITelemetryComponent.removeMetric`

***

### query()

> **query**(`type`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `ITelemetryMetric`[]; `cursor`: `string`; \}\>

Query the metrics.

#### Parameters

##### type?

`MetricType`

The type of the metric.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `ITelemetryMetric`[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

`ITelemetryComponent.query`

***

### queryValues()

> **queryValues**(`id`, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<\{ `metric`: `ITelemetryMetric`; `entities`: `ITelemetryMetricValue`[]; `cursor`: `string`; \}\>

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

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `metric`: `ITelemetryMetric`; `entities`: `ITelemetryMetricValue`[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

`ITelemetryComponent.queryValues`
