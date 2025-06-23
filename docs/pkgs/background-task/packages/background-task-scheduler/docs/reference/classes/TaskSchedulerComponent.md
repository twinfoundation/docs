# Class: TaskSchedulerComponent

Class for performing task operations in entity storage.

## Implements

- `ITaskSchedulerComponent`

## Constructors

### Constructor

> **new TaskSchedulerComponent**(`options?`): `TaskSchedulerComponent`

Create a new instance of TaskSchedulerComponent.

#### Parameters

##### options?

[`ITaskSchedulerConstructorOptions`](../interfaces/ITaskSchedulerConstructorOptions.md)

The options for the scheduler.

#### Returns

`TaskSchedulerComponent`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"task-scheduler"`

The namespace supported by the task scheduler.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ITaskSchedulerComponent.CLASS_NAME`

## Methods

### stop()

> **stop**(`nodeIdentity`, `nodeLoggingConnectorType`, `componentState?`): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

##### nodeIdentity

`string`

The identity of the node stopping the component.

##### nodeLoggingConnectorType

The node logging connector type, defaults to "node-logging".

`undefined` | `string`

##### componentState?

A persistent state which can be modified by the method.

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
