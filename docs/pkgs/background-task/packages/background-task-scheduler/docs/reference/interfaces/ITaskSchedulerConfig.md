# Interface: ITaskSchedulerConfig

Interface for the task scheduler configuration.

## Properties

### overrideInterval?

> `optional` **overrideInterval**: `number`

The interval between checks for running tasks, defaults to 1 minute since that is the resolution of the tasks.

#### Default

```ts
60000
```
