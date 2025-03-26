# Interface: IEntityStorageTelemetryConnectorConstructorOptions

The options for the entity storage telemetry connector constructor.

## Properties

### telemetryMetricStorageConnectorType?

> `optional` **telemetryMetricStorageConnectorType**: `string`

The type of the entity storage connector to use.

#### Default

```ts
telemetry-metric
```

***

### telemetryMetricValueStorageConnectorType?

> `optional` **telemetryMetricValueStorageConnectorType**: `string`

The type of the entity storage connector to use.

#### Default

```ts
telemetry-metric-value
```

***

### loggingConnectorType?

> `optional` **loggingConnectorType**: `string`

The type of the logging connector to use, can be undefined for no logging.
