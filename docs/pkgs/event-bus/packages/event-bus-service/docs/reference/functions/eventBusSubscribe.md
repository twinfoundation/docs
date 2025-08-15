# Function: eventBusSubscribe()

> **eventBusSubscribe**(`socketRequestContext`, `componentName`, `request`, `emitter`): `Promise`\<`void`\>

Subscribe to a topic.

## Parameters

### socketRequestContext

`ISocketRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IEventBusSubscribeRequest`

The request.

### emitter

(`topic`, `response`) => `Promise`\<`void`\>

The emitter to send message back.

## Returns

`Promise`\<`void`\>

The response object with additional http response properties.
