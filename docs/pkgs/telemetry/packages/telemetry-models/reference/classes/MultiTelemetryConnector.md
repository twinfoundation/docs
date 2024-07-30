# Class: MultiTelemetryConnector

Class for performing telemetry operations on multiple connectors.

## Implements

- [`ITelemetryConnector`](../interfaces/ITelemetryConnector.md)

## Constructors

### new MultiTelemetryConnector()

> **new MultiTelemetryConnector**(`options`): [`MultiTelemetryConnector`](MultiTelemetryConnector.md)

Create a new instance of MultiTelemetryConnector.

#### Parameters

• **options**

The options for the connector.

• **options.telemetryConnectorTypes**: `string`[]

The telemetry connectors to multiplex.

#### Returns

[`MultiTelemetryConnector`](MultiTelemetryConnector.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`CLASS_NAME`](../interfaces/ITelemetryConnector.md#class_name)

***

### \_telemetryConnectors

> `private` `readonly` **\_telemetryConnectors**: [`ITelemetryConnector`](../interfaces/ITelemetryConnector.md)[]

The connectors to send the telemetry entries to.

## Methods

### createMetric()

> **createMetric**(`metric`, `requestContext`?): `Promise`\<`void`\>

Create a new metric.

#### Parameters

• **metric**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

The metric details.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`createMetric`](../interfaces/ITelemetryConnector.md#createmetric)

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

> **metric**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

##### value

> **value**: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md)

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`getMetric`](../interfaces/ITelemetryConnector.md#getmetric)

***

### updateMetric()

> **updateMetric**(`metric`, `requestContext`?): `Promise`\<`void`\>

Update metric.

#### Parameters

• **metric**: `Omit`\<[`ITelemetryMetric`](../interfaces/ITelemetryMetric.md), `"type"`\>

The metric details.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`updateMetric`](../interfaces/ITelemetryConnector.md#updatemetric)

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`addMetricValue`](../interfaces/ITelemetryConnector.md#addmetricvalue)

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`removeMetric`](../interfaces/ITelemetryConnector.md#removemetric)

***

### query()

> **query**(`type`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

Query the metrics.

#### Parameters

• **type?**: [`MetricType`](../type-aliases/MetricType.md)

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

> **entities**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)[]

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`query`](../interfaces/ITelemetryConnector.md#query)

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

> **metric**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

The metric details.

##### entities

> **entities**: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md)[]

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`queryValues`](../interfaces/ITelemetryConnector.md#queryvalues)

#### Throws

NotImplementedError if the implementation does not support retrieval.
