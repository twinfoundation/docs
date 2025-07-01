# Class: MultiTelemetryConnector

Class for performing telemetry operations on multiple connectors.

## Implements

- [`ITelemetryConnector`](../interfaces/ITelemetryConnector.md)

## Constructors

### Constructor

> **new MultiTelemetryConnector**(`options`): `MultiTelemetryConnector`

Create a new instance of MultiTelemetryConnector.

#### Parameters

##### options

[`IMultiTelemetryConnectorConstructorOptions`](../interfaces/IMultiTelemetryConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`MultiTelemetryConnector`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ITelemetryConnector.CLASS_NAME`

## Methods

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

##### metric

[`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`createMetric`](../interfaces/ITelemetryConnector.md#createmetric)

***

### getMetric()

> **getMetric**(`id`): `Promise`\<\{ `metric`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md); `value`: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md); \}\>

Get the metric details and it's most recent value.

#### Parameters

##### id

`string`

The metric id.

#### Returns

`Promise`\<\{ `metric`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md); `value`: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md); \}\>

The metric details and it's most recent value.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`getMetric`](../interfaces/ITelemetryConnector.md#getmetric)

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

##### metric

`Omit`\<[`ITelemetryMetric`](../interfaces/ITelemetryMetric.md), `"type"`\>

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`updateMetric`](../interfaces/ITelemetryConnector.md#updatemetric)

***

### addMetricValue()

> **addMetricValue**(`id`, `value`, `customData?`): `Promise`\<`string`\>

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`addMetricValue`](../interfaces/ITelemetryConnector.md#addmetricvalue)

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

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`removeMetric`](../interfaces/ITelemetryConnector.md#removemetric)

***

### query()

> **query**(`type?`, `cursor?`, `pageSize?`): `Promise`\<\{ `entities`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)[]; `cursor?`: `string`; \}\>

Query the metrics.

#### Parameters

##### type?

[`MetricType`](../type-aliases/MetricType.md)

The type of the metric.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md)[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`query`](../interfaces/ITelemetryConnector.md#query)

***

### queryValues()

> **queryValues**(`id`, `timeStart?`, `timeEnd?`, `cursor?`, `pageSize?`): `Promise`\<\{ `metric`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md); `entities`: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md)[]; `cursor?`: `string`; \}\>

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

`Promise`\<\{ `metric`: [`ITelemetryMetric`](../interfaces/ITelemetryMetric.md); `entities`: [`ITelemetryMetricValue`](../interfaces/ITelemetryMetricValue.md)[]; `cursor?`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

[`ITelemetryConnector`](../interfaces/ITelemetryConnector.md).[`queryValues`](../interfaces/ITelemetryConnector.md#queryvalues)
