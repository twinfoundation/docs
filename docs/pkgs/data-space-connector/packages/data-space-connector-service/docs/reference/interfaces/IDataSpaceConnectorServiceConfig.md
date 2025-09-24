# Interface: IDataSpaceConnectorServiceConfig

Data Space Connector service configuration

## Properties

### dataSpaceConnectorAppDescriptors?

> `optional` **dataSpaceConnectorAppDescriptors**: `IDataSpaceConnectorAppDescriptor`[]

Data Space Connector App Descriptors to be registered initially

***

### retainActivityLogsFor?

> `optional` **retainActivityLogsFor**: `number`

The amount of time in minutes to retain activity log entries until removal, set to -1 to keep forever.

#### Default

```ts
-1
```

***

### activityLogsCleanUpInterval?

> `optional` **activityLogsCleanUpInterval**: `number`

The interval in minutes in between activity log clean ups. -1 indicates no clean up shall be done.

#### Default

```ts
60 minutes
```
