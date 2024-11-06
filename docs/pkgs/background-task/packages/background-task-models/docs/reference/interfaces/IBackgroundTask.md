# Interface: IBackgroundTask\<T, U\>

Interface describing a background task connector.

## Type Parameters

• **T** = `any`

• **U** = `any`

## Properties

### id

> **id**: `string`

The id.

***

### type

> **type**: `string`

The type of the task.

***

### retryInterval?

> `optional` **retryInterval**: `number`

The retry interval in milliseconds, undefined if default scheduling.

***

### retriesRemaining?

> `optional` **retriesRemaining**: `number`

The number of retries remaining, undefined if infinite retries.

***

### dateCreated

> **dateCreated**: `string`

The date the task was created.

***

### dateModified

> **dateModified**: `string`

The date the task was last modified.

***

### dateCompleted?

> `optional` **dateCompleted**: `string`

The date the task was complete.

***

### dateCancelled?

> `optional` **dateCancelled**: `string`

The date the task was cancelled.

***

### dateRetainUntil?

> `optional` **dateRetainUntil**: `string`

The date until when to retain.

***

### status

> **status**: [`TaskStatus`](../type-aliases/TaskStatus.md)

The status of the task.

***

### payload?

> `optional` **payload**: `T`

The payload to execute the task with.

***

### result?

> `optional` **result**: `U`

The result of the execution.

***

### error?

> `optional` **error**: `IError`

The error at last execution.
