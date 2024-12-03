# Function: eventBusUnsubscribe()

> **eventBusUnsubscribe**(`httpRequestContext`, `componentName`, `request`, `emitter`): `Promise`\<`void`\>

Unsubscribe from a topic.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **componentName**: `string`

The name of the component to use in the routes.

• **request**: `IEventBusUnsubscribeRequest`

The request.

• **emitter**

The emitter to send message back.

## Returns

`Promise`\<`void`\>

The response object with additional http response properties.
