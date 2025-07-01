# Interface: IScheduledTaskTime

Interface describing a scheduled task time.

## Properties

### nextTriggerTime?

> `optional` **nextTriggerTime**: `number`

The date/time to start the task, if not provided defaults to first interval from now.

***

### intervalDays?

> `optional` **intervalDays**: `number`

The interval in days to repeat the task, if no intervals are set the task will not repeat.

***

### intervalHours?

> `optional` **intervalHours**: `number`

The interval in hours to repeat the task, if no intervals are set the task will not repeat.

***

### intervalMinutes?

> `optional` **intervalMinutes**: `number`

The interval in minutes to repeat the task, if no intervals are set the task will not repeat.
