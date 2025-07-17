# Class: BackgroundTask

Class defining a background task.

## Constructors

### Constructor

> **new BackgroundTask**(): `BackgroundTask`

#### Returns

`BackgroundTask`

## Properties

### id

> **id**: `string`

The id.

***

### type

> **type**: `string`

The type of the task.

***

### threadId

> **threadId**: `string`

The thread id for the task.

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

### dateNextProcess?

> `optional` **dateNextProcess**: `string`

The date the task is next to be processed.

***

### dateCancelled?

> `optional` **dateCancelled**: `string`

The date the task was cancelled.

***

### dateCompleted?

> `optional` **dateCompleted**: `string`

The date the task was completed.

***

### retainFor?

> `optional` **retainFor**: `number`

The amount of time in milliseconds to retain the task after completion.

***

### retainUntil?

> `optional` **retainUntil**: `number`

The timestamp of when to retain the task until.

***

### status

> **status**: `TaskStatus`

The status of the task.

***

### payload?

> `optional` **payload**: `unknown`

The payload to execute the task with.

***

### result?

> `optional` **result**: `unknown`

The result of the execution.

***

### error?

> `optional` **error**: `IError`

The error at last execution.
