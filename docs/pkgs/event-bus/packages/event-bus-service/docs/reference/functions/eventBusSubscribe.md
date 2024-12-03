# Function: eventBusSubscribe()

> **eventBusSubscribe**(`httpRequestContext`, `componentName`, `request`, `emitter`): `Promise`\<`void`\>

Subscribe to a topic.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **componentName**: `string`

The name of the component to use in the routes.

• **request**: `IEventBusSubscribeRequest`

The request.

• **emitter**

The emitter to send message back.

## Returns

`Promise`\<`void`\>

The response object with additional http response properties.
