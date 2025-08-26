# Interface: IActivityLogEntry

The details related to the processing of an Activity

## Extends

- [`IActivityLogDetails`](IActivityLogDetails.md)

## Properties

### id

> **id**: `string`

The Id of the Activity Log entry.

#### Inherited from

[`IActivityLogDetails`](IActivityLogDetails.md).[`id`](IActivityLogDetails.md#id)

***

### activityId?

> `optional` **activityId**: `string`

The activity Id that this entry refers to.

#### Inherited from

[`IActivityLogDetails`](IActivityLogDetails.md).[`activityId`](IActivityLogDetails.md#activityid)

***

### generator

> **generator**: `string`

The identity of the Activity's generator.

#### Inherited from

[`IActivityLogDetails`](IActivityLogDetails.md).[`generator`](IActivityLogDetails.md#generator)

***

### dateCreated

> **dateCreated**: `string`

The creation date of this object.

#### Inherited from

[`IActivityLogDetails`](IActivityLogDetails.md).[`dateCreated`](IActivityLogDetails.md#datecreated)

***

### dateModified

> **dateModified**: `string`

The last update date of this object.

#### Inherited from

[`IActivityLogDetails`](IActivityLogDetails.md).[`dateModified`](IActivityLogDetails.md#datemodified)

***

### status

> **status**: [`ActivityProcessingStatus`](../type-aliases/ActivityProcessingStatus.md)

Status of the Activity Processing.

***

### pendingTasks?

> `optional` **pendingTasks**: [`ITaskApp`](ITaskApp.md)[]

The pending tasks that have to be run to process the Activity.

***

### runningTasks?

> `optional` **runningTasks**: [`ITaskApp`](ITaskApp.md) & [`IActivityLogDates`](IActivityLogDates.md)[]

The running tasks that are processing the Activity.

***

### finalizedTasks?

> `optional` **finalizedTasks**: [`ITaskApp`](ITaskApp.md) & [`IActivityLogDates`](IActivityLogDates.md) & `object`[]

The tasks that have already finalized.

***

### inErrorTasks?

> `optional` **inErrorTasks**: [`ITaskApp`](ITaskApp.md) & `object`[]

The tasks that are in error.
