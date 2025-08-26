# Function: activityLogStatusUpdate()

> **activityLogStatusUpdate**(`socketRequestContext`, `componentName`, `request`, `emitter`): `Promise`\<`void`\>

Provides an status update.

## Parameters

### socketRequestContext

`ISocketRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IActivityLogStatusRequest`

The request.

### emitter

(`topic`, `response`) => `Promise`\<`void`\>

The emitter to send message back.

## Returns

`Promise`\<`void`\>

The response object with additional http response properties.
