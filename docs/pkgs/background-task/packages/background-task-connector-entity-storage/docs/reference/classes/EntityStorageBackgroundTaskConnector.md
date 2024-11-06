# Class: EntityStorageBackgroundTaskConnector

Class for performing background task operations in entity storage.

## Implements

- `IBackgroundTaskConnector`

## Constructors

### new EntityStorageBackgroundTaskConnector()

> **new EntityStorageBackgroundTaskConnector**(`options`?): [`EntityStorageBackgroundTaskConnector`](EntityStorageBackgroundTaskConnector.md)

Create a new instance of EntityStorageBackgroundTaskConnector.

#### Parameters

• **options?**

The options for the connector.

• **options.backgroundTaskEntityStorageType?**: `string`

The background task entity storage connector type, defaults to "background-task".

• **options.loggingConnectorType?**: `string`

The logging connector type, defaults to "logging".

• **options.config?**: [`IEntityStorageBackgroundTaskConnectorConfig`](../interfaces/IEntityStorageBackgroundTaskConnectorConfig.md)

The configuration for the connector.

#### Returns

[`EntityStorageBackgroundTaskConnector`](EntityStorageBackgroundTaskConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the background task connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBackgroundTaskConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBackgroundTaskConnector.start`

***

### stop()

> **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBackgroundTaskConnector.stop`

***

### registerHandler()

> **registerHandler**\<`T`, `U`\>(`taskType`, `handler`): `Promise`\<`void`\>

Register a handler for a task.

#### Type Parameters

• **T**

• **U**

#### Parameters

• **taskType**: `string`

The type of the task the handler can process.

• **handler**: `BackgroundTaskHandler`\<`T`, `U`\>

The handler for the task.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IBackgroundTaskConnector.registerHandler`

***

### unregisterHandler()

> **unregisterHandler**(`taskType`): `Promise`\<`void`\>

Unregister a handler for a task.

#### Parameters

• **taskType**: `string`

The type of the task handler to remove.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IBackgroundTaskConnector.unregisterHandler`

***

### create()

> **create**\<`T`\>(`type`, `payload`?, `options`?): `Promise`\<`string`\>

Create a new task.

#### Type Parameters

• **T**

#### Parameters

• **type**: `string`

The type of the task.

• **payload?**: `T`

The payload for the task.

• **options?**

Additional options for the task.

• **options.retryCount?**: `number`

The number of times to retry the task if it fails, leave undefined to retry forever.

• **options.retryInterval?**: `number`

The interval in milliseconds to wait between retries, defaults to 5000, leave undefined for default scheduling.

• **options.retainFor?**: `number`

The amount of time in milliseconds to retain the result until removal, defaults to 0 for immediate removal, set to -1 to keep forever.

#### Returns

`Promise`\<`string`\>

The id of the created task.

#### Implementation of

`IBackgroundTaskConnector.create`

***

### get()

> **get**\<`T`, `U`\>(`taskId`): `Promise`\<`undefined` \| `IBackgroundTask`\<`T`, `U`\>\>

Get the task details.

#### Type Parameters

• **T**

• **U**

#### Parameters

• **taskId**: `string`

The id of the task to get the details for.

#### Returns

`Promise`\<`undefined` \| `IBackgroundTask`\<`T`, `U`\>\>

The details of the task.

#### Implementation of

`IBackgroundTaskConnector.get`

***

### retry()

> **retry**(`taskId`): `Promise`\<`void`\>

Retry a failed task immediately instead of waiting for it's next scheduled retry time.

#### Parameters

• **taskId**: `string`

The id of the task to retry.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBackgroundTaskConnector.retry`

***

### remove()

> **remove**(`taskId`): `Promise`\<`void`\>

Remove a task ignoring any retain until date.

#### Parameters

• **taskId**: `string`

The id of the task to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBackgroundTaskConnector.remove`

***

### cancel()

> **cancel**(`taskId`): `Promise`\<`void`\>

Cancel a task, will only be actioned if the task is currently pending.

#### Parameters

• **taskId**: `string`

The id of the task to cancel.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBackgroundTaskConnector.cancel`

***

### query()

> **query**(`taskType`?, `taskStatus`?, `sortProperty`?, `sortDirection`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of tasks.

#### Parameters

• **taskType?**: `string`

The type of the task to get.

• **taskStatus?**: `TaskStatus`

The status of the task to get.

• **sortProperty?**: `"status"` \| `"dateCreated"` \| `"dateModified"` \| `"dateCompleted"`

The property to sort by, defaults to dateCreated.

• **sortDirection?**: `SortDirection`

The order to sort by, defaults to ascending.

• **cursor?**: `string`

The cursor to get the next page of tasks.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

The list of tasks.

##### entities

> **entities**: `IBackgroundTask`\<`any`, `any`\>[]

##### cursor?

> `optional` **cursor**: `string`

#### Implementation of

`IBackgroundTaskConnector.query`
