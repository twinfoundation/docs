# Class: EntityStorageTelemetryConnector

Class for performing telemetry operations in entity storage.

## Implements

- `ITelemetryConnector`

## Constructors

### new EntityStorageTelemetryConnector()

> **new EntityStorageTelemetryConnector**(`options`?): [`EntityStorageTelemetryConnector`](EntityStorageTelemetryConnector.md)

Create a new instance of EntityStorageTelemetryConnector.

#### Parameters

• **options?**

The options for the connector.

• **options.telemetryMetricStorageConnectorType?**: `string`

The type of the entity storage connector to use, defaults to "telemetry-metric".

• **options.telemetryMetricValueStorageConnectorType?**: `string`

The type of the entity storage connector to use, defaults to "telemetry-metric-value".

• **options.loggingConnectorType?**: `string`

The type of the logging connector to use, can be undefined for no logging.

#### Returns

[`EntityStorageTelemetryConnector`](EntityStorageTelemetryConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"entity-storage"`

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

• **metric**: `ITelemetryMetric`

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryConnector.createMetric`

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

`ITelemetryConnector.getMetric`

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

`ITelemetryConnector.updateMetric`

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

• **id**: `string`

The id of the metric.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITelemetryConnector.removeMetric`

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

#### Implementation of

`ITelemetryConnector.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.

***

### queryValues()

> **queryValues**(`id`, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the metrics.

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

#### Implementation of

`ITelemetryConnector.queryValues`

#### Throws

NotImplementedError if the implementation does not support retrieval.
