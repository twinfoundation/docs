# Class: EntityStorageTelemetryConnector

Class for performing telemetry operations in entity storage.

## Implements

- `ITelemetryConnector`

## Constructors

### Constructor

> **new EntityStorageTelemetryConnector**(`options?`): `EntityStorageTelemetryConnector`

Create a new instance of EntityStorageTelemetryConnector.

#### Parameters

##### options?

[`IEntityStorageTelemetryConnectorConstructorOptions`](../interfaces/IEntityStorageTelemetryConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`EntityStorageTelemetryConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the telemetry connector.

***

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

`ITelemetryMetric`

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryConnector.createMetric`

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

`ITelemetryConnector.getMetric`

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

`ITelemetryConnector.updateMetric`

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

The custom data for the metric value.

#### Returns

`Promise`\<`string`\>

Nothing.

#### Implementation of

`ITelemetryConnector.addMetricValue`

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

`ITelemetryConnector.removeMetric`

***

### query()

> **query**(`type?`, `cursor?`, `pageSize?`): `Promise`\<\{ `entities`: `ITelemetryMetric`[]; `cursor`: `string`; \}\>

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

`ITelemetryConnector.query`

***

### queryValues()

> **queryValues**(`id`, `timeStart?`, `timeEnd?`, `cursor?`, `pageSize?`): `Promise`\<\{ `metric`: `ITelemetryMetric`; `entities`: `ITelemetryMetricValue`[]; `cursor`: `string`; \}\>

Query the metrics.

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

`ITelemetryConnector.queryValues`
