# Interface: IBackgroundTaskConnector

Interface describing a background task connector.

## Extends

- `IComponent`

## Methods

### registerHandler()

> **registerHandler**\<`T`, `U`\>(`taskType`, `module`, `method`, `stateChangeCallback`?): `Promise`\<`void`\>

Register a handler for a task.

#### Type Parameters

• **T**

• **U**

#### Parameters

##### taskType

`string`

The type of the task the handler can process.

##### module

`string`

The module the handler is in.

##### method

`string`

The method in the module to execute.

##### stateChangeCallback?

(`task`) => `Promise`\<`void`\>

The callback to execute when the task state is updated.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterHandler()

> **unregisterHandler**(`taskType`): `Promise`\<`void`\>

Unregister a handler for a task.

#### Parameters

##### taskType

`string`

The type of the task handler to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### create()

> **create**\<`T`\>(`type`, `payload`?, `options`?): `Promise`\<`string`\>

Create a new task.

#### Type Parameters

• **T**

#### Parameters

##### type

`string`

The type of the task.

##### payload?

`T`

The payload for the task.

##### options?

Additional options for the task.

###### retryCount

`number`

The number of times to retry the task if it fails, leave undefined to retry forever.

###### retryInterval

`number`

The interval in milliseconds to wait between retries, defaults to 5000, leave undefined for default scheduling.

###### retainFor

`number`

The amount of time in milliseconds to retain the result until removal, defaults to 0 for immediate removal, set to -1 to keep forever.

#### Returns

`Promise`\<`string`\>

The id of the created task.

***

### get()

> **get**\<`T`, `U`\>(`taskId`): `Promise`\<`undefined` \| [`IBackgroundTask`](IBackgroundTask.md)\<`T`, `U`\>\>

Get the task details.

#### Type Parameters

• **T**

• **U**

#### Parameters

##### taskId

`string`

The id of the task to get the details for.

#### Returns

`Promise`\<`undefined` \| [`IBackgroundTask`](IBackgroundTask.md)\<`T`, `U`\>\>

The details of the task.

***

### retry()

> **retry**(`taskId`): `Promise`\<`void`\>

Retry a failed task immediately instead of waiting for it's next scheduled retry time.

#### Parameters

##### taskId

`string`

The id of the task to retry.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### remove()

> **remove**(`taskId`): `Promise`\<`void`\>

Remove a task ignoring any retain until date.

#### Parameters

##### taskId

`string`

The id of the task to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### cancel()

> **cancel**(`taskId`): `Promise`\<`void`\>

Cancel a task, will only be actioned if the task is currently pending.

#### Parameters

##### taskId

`string`

The id of the task to cancel.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`taskType`?, `taskStatus`?, `sortProperty`?, `sortDirection`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: [`IBackgroundTask`](IBackgroundTask.md)[]; `cursor`: `string`; \}\>

Get a list of tasks.

#### Parameters

##### taskType?

`string`

The type of the task to get.

##### taskStatus?

[`TaskStatus`](../type-aliases/TaskStatus.md)

The status of the task to get.

##### sortProperty?

The property to sort by, defaults to dateCreated.

`"status"` | `"dateCreated"` | `"dateModified"` | `"dateCompleted"`

##### sortDirection?

`SortDirection`

The order to sort by, defaults to ascending.

##### cursor?

`string`

The cursor to get the next page of tasks.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: [`IBackgroundTask`](IBackgroundTask.md)[]; `cursor`: `string`; \}\>

The list of tasks.
