# Class: TelemetryService

Service for performing telemetry operations to a connector.

## Implements

- `ITelemetry`

## Constructors

### new TelemetryService()

> **new TelemetryService**(`options`?): [`TelemetryService`](TelemetryService.md)

Create a new instance of TelemetryService.

#### Parameters

• **options?**

The options for the connector.

• **options.telemetryConnectorType?**: `string`

The type of the telemetry connector to use, defaults to "telemetry".

#### Returns

[`TelemetryService`](TelemetryService.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ITelemetry.CLASS_NAME`

## Methods

### createMetric()

> **createMetric**(`metric`, `requestContext`?): `Promise`\<`void`\>

Create a new metric.

#### Parameters

• **metric**: `ITelemetryMetric`

The metric details.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetry.createMetric`

***

### getMetric()

> **getMetric**(`id`, `requestContext`?): `Promise`\<`object`\>

Get the metric details and it's most recent value.

#### Parameters

• **id**: `string`

The metric id.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The metric details and it's most recent value.

##### metric

> **metric**: `ITelemetryMetric`

##### value

> **value**: `ITelemetryMetricValue`

#### Implementation of

`ITelemetry.getMetric`

***

### updateMetric()

> **updateMetric**(`metric`, `requestContext`?): `Promise`\<`void`\>

Update metric.

#### Parameters

• **metric**: `Omit`\<`ITelemetryMetric`, `"type"`\>

The metric details.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetry.updateMetric`

***

### addMetricValue()

> **addMetricValue**(`id`, `value`, `customData`?, `requestContext`?): `Promise`\<`string`\>

Add a metric value.

#### Parameters

• **id**: `string`

The id of the metric.

• **value**: `number` \| `"inc"` \| `"dec"`

The value for the add operation.

• **customData?**

The custom data for the add operation.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The created metric value id.

#### Implementation of

`ITelemetry.addMetricValue`

***

### removeMetric()

> **removeMetric**(`id`, `requestContext`?): `Promise`\<`void`\>

Remove metric.

#### Parameters

• **id**: `string`

The id of the metric.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetry.removeMetric`

***

### query()

> **query**(`type`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

Query the metrics.

#### Parameters

• **type?**: `MetricType`

The type of the metric.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `ITelemetryMetric`[]

The metrics.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more values.

##### pageSize?

> `optional` **pageSize**: `number`

Number of values to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`ITelemetry.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.

***

### queryValues()

> **queryValues**(`id`, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

Query the metric values.

#### Parameters

• **id**: `string`

The id of the metric.

• **timeStart?**: `number`

The inclusive time as the start of the metric entries.

• **timeEnd?**: `number`

The inclusive time as the end of the metric entries.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### metric

> **metric**: `ITelemetryMetric`

The metric details.

##### entities

> **entities**: `ITelemetryMetricValue`[]

The values for the metric.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more values.

##### pageSize?

> `optional` **pageSize**: `number`

Number of values to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`ITelemetry.queryValues`

#### Throws

NotImplementedError if the implementation does not support retrieval.
