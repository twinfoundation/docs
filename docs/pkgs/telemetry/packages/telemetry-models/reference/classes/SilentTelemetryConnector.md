# Class: SilentTelemetryConnector

Class for performing telemetry operations to nowhere.

## Implements

- [`ITelemetryConnector`](../interfaces/ITelemetryConnector.md)

## Constructors

### new SilentTelemetryConnector()

> **new SilentTelemetryConnector**(): [`SilentTelemetryConnector`](SilentTelemetryConnector.md)

#### Returns

[`SilentTelemetryConnector`](SilentTelemetryConnector.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`CLASS_NAME`](../interfaces/ITelemetryConnector.md#class_name)

## Methods

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

• **metric**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`createMetric`](../interfaces/ITelemetryConnector.md#createmetric)

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

> **metric**: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

##### value

> **value**: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md)

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`getMetric`](../interfaces/ITelemetryConnector.md#getmetric)

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

• **metric**: `Omit`\<[`ITelemetryMetric`](../interfaces/ITelemetryMetric.md), `"type"`\>

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`updateMetric`](../interfaces/ITelemetryConnector.md#updatemetric)

***

### addMetricValue()

> **addMetricValue**(`id`, `value`, `customData`?): `Promise`\<`string`\>

Update metric value.

#### Parameters

• **id**: `string`

The id of the metric.

• **value**: `number` \| `"inc"` \| `"dec"`

The value for the update operation.

• **customData?**

The custom data for the update operation.

#### Returns

`Promise`\<`string`\>

The created metric value id..

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`addMetricValue`](../interfaces/ITelemetryConnector.md#addmetricvalue)

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`removeMetric`](../interfaces/ITelemetryConnector.md#removemetric)

***

### query()

> **query**(`type`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the metrics.

#### Parameters

• **type?**: [`MetricType`](../type-aliases/MetricType.md)

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
