# Interface: IEntityStorageBackgroundTaskConnectorConfig

Interface for the entity storage background task connector.

## Properties

### engineName?

> `optional` **engineName**: `string`

The name of the engine to clone when creating the background task connector.

#### Default

```ts
engine
```

***

### taskInterval?

> `optional` **taskInterval**: `number`

The default interval to leave between tasks in milliseconds, defaults to 100ms.

***

### retryInterval?

> `optional` **retryInterval**: `number`

The default retry interval to leave between tasks in milliseconds, defaults to 5000ms.

***

### cleanupInterval?

> `optional` **cleanupInterval**: `number`

The default cleanup interval for removing retained tasks, defaults to 120000ms.
