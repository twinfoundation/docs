# Function: loggingCreate()

> **loggingCreate**(`requestContext`, `factoryServiceName`, `request`, `body`?): `Promise`\<`void`\>

Create a new log entry.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `ILoggingCreateRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`void`\>

The response object with additional http response properties.
