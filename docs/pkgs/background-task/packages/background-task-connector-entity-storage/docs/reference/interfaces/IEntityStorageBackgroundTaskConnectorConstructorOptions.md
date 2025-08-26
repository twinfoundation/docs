# Interface: IEntityStorageBackgroundTaskConnectorConstructorOptions

Options for the entity storage background task connector constructor.

## Properties

### backgroundTaskEntityStorageType?

> `optional` **backgroundTaskEntityStorageType**: `string`

The background task entity storage connector type.

#### Default

```ts
background-task
```

***

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The logging component type.

#### Default

```ts
logging
```

***

### config?

> `optional` **config**: [`IEntityStorageBackgroundTaskConnectorConfig`](IEntityStorageBackgroundTaskConnectorConfig.md)

The configuration for the connector.
