# Interface: IDataSpaceConnectorServiceConstructorOptions

Federated Catalogue service options

## Properties

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

Logging component type.

#### Default

```ts
logging
```

***

### backgroundTaskConnectorType?

> `optional` **backgroundTaskConnectorType**: `string`

Background task connector.

#### Default

```ts
background-task
```

***

### activityLogEntityStorageType?

> `optional` **activityLogEntityStorageType**: `string`

The entity storage for activity log details.

#### Default

```ts
activity-log-details
```

***

### activityTaskEntityStorageType?

> `optional` **activityTaskEntityStorageType**: `string`

The entity storage for the association between Activities and Tasks.

#### Default

```ts
activity-task
```

***

### config?

> `optional` **config**: [`IDataSpaceConnectorServiceConfig`](IDataSpaceConnectorServiceConfig.md)

The configuration of the Data Space Connector Service.
