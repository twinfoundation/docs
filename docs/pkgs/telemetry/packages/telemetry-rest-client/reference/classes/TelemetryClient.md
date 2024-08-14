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

• **config**: `IBaseRestClientConfig`

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

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

• **metric**: `ITelemetryMetric`

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryComponent.createMetric`

***

### getMetric()

> **getMetric**(`id`): `Promise`\<`object`\>

Get the metric details and it's most recent value.

#### Parameters

• **id**: `string`

The metric id.

#### Returns

`Promise`\<`object`\>

The metric details and it's most recent value.

##### metric

> **metric**: `ITelemetryMetric`

##### value

> **value**: `ITelemetryMetricValue`

#### Implementation of

`ITelemetryComponent.getMetric`

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

• **metric**: `Omit`\<`ITelemetryMetric`, `"type"`\>

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

• **id**: `string`

The id of the metric.

• **value**: `number` \| `"inc"` \| `"dec"`

The value for the add operation.

• **customData?**

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

• **id**: `string`

The id of the metric.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryComponent.removeMetric`

***

### query()

> **query**(`type`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the metrics.

#### Parameters

• **type?**: `MetricType`

The type of the metric.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

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

`ITelemetryComponent.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.

***

### queryValues()

> **queryValues**(`id`, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

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

`ITelemetryComponent.queryValues`

#### Throws

NotImplementedError if the implementation does not support retrieval.
