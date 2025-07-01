# Interface: ITaskSchedulerComponent

Interface describing a task scheduler.

## Extends

- `IComponent`

## Methods

### addTask()

> **addTask**(`taskId`, `times`, `taskCallback`): `Promise`\<`void`\>

Add a task to the scheduler.

#### Parameters

##### taskId

`string`

The id of the task to add.

##### times

[`IScheduledTaskTime`](IScheduledTaskTime.md)[]

The times at which the task should be scheduled.

##### taskCallback

() => `Promise`\<`void`\>

The callback to execute when the task is scheduled.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### removeTask()

> **removeTask**(`taskId`): `Promise`\<`void`\>

Remove a task from the scheduler.

#### Parameters

##### taskId

`string`

The id of the task to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### tasksInfo()

> **tasksInfo**(): `Promise`\<[`IScheduledTaskInfo`](IScheduledTaskInfo.md)\>

Get the information about the tasks.

#### Returns

`Promise`\<[`IScheduledTaskInfo`](IScheduledTaskInfo.md)\>

The tasks information.
