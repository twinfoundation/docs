# Interface: IActivityLogStatusNotification

The status supplied to clients of the Data Space Connector

## Properties

### activityLogEntryId

> **activityLogEntryId**: `string`

The activity log entry id.

***

### activityId?

> `optional` **activityId**: `string`

The activity Id.

***

### taskProcessingStatus

> **taskProcessingStatus**: `object`

The activity processing status through the associated tasks.

#### taskId

> **taskId**: `string`

The task reported.

#### dataSpaceConnectorAppId

> **dataSpaceConnectorAppId**: `string`

The Data Space Connector App.

#### taskStatus

> **taskStatus**: `TaskStatus`

The status of the task reported. Only terminated and error are reported.
