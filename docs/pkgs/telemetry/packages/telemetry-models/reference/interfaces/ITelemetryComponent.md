# Interface: ITelemetryComponent

Interface describing a telemetry component contract.

## Extends

- `IComponent`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the component.

#### Inherited from

`IComponent.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Inherited from

`IComponent.bootstrap`

***

### start()?

> `optional` **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.start`

***

### stop()?

> `optional` **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.stop`

***

### createMetric()

> **createMetric**(`metric`): `Promise`\<`void`\>

Create a new metric.

#### Parameters

• **metric**: [`ITelemetryMetric`](ITelemetryMetric.md)

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

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

> **metric**: [`ITelemetryMetric`](ITelemetryMetric.md)

##### value

> **value**: [`ITelemetryMetricValue`](ITelemetryMetricValue.md)

***

### updateMetric()

> **updateMetric**(`metric`): `Promise`\<`void`\>

Update metric.

#### Parameters

• **metric**: `Omit`\<[`ITelemetryMetric`](ITelemetryMetric.md), `"type"`\>

The metric details.

#### Returns

`Promise`\<`void`\>

Nothing.

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

> **entities**: [`ITelemetryMetric`](ITelemetryMetric.md)[]

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

> **metric**: [`ITelemetryMetric`](ITelemetryMetric.md)

The metric details.

##### entities

> **entities**: [`ITelemetryMetricValue`](ITelemetryMetricValue.md)[]

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

#### Throws

NotImplementedError if the implementation does not support retrieval.
