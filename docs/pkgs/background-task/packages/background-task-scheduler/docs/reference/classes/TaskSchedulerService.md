# Class: TaskSchedulerService

Class for scheduling tasks.

## Implements

- `ITaskSchedulerComponent`

## Constructors

### Constructor

> **new TaskSchedulerService**(`options?`): `TaskSchedulerService`

Create a new instance of TaskSchedulerComponent.

#### Parameters

##### options?

[`ITaskSchedulerConstructorOptions`](../interfaces/ITaskSchedulerConstructorOptions.md)

The options for the scheduler.

#### Returns

`TaskSchedulerService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`ITaskSchedulerComponent.className`

***

### stop()

> **stop**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITaskSchedulerComponent.stop`

***

### addTask()

> **addTask**(`taskId`, `times`, `taskCallback`): `Promise`\<`void`\>

Add a task to the scheduler.

#### Parameters

##### taskId

`string`

The id of the task to add.

##### times

`IScheduledTaskTime`[]

The times at which the task should be scheduled.

##### taskCallback

() => `Promise`\<`void`\>

The callback to execute when the task is scheduled.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ITaskSchedulerComponent.addTask`

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

#### Implementation of

`ITaskSchedulerComponent.removeTask`

***

### tasksInfo()

> **tasksInfo**(): `Promise`\<`IScheduledTaskInfo`\>

Get the information about the tasks.

#### Returns

`Promise`\<`IScheduledTaskInfo`\>

The tasks information.

#### Implementation of

`ITaskSchedulerComponent.tasksInfo`
