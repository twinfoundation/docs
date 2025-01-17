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

### loggingConnectorType?

> `optional` **loggingConnectorType**: `string`

The logging connector type.

#### Default

```ts
logging
```

***

### config?

> `optional` **config**: [`IEntityStorageBackgroundTaskConnectorConfig`](IEntityStorageBackgroundTaskConnectorConfig.md)

The configuration for the connector.
