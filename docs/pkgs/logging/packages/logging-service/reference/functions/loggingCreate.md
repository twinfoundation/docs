# Function: loggingCreate()

> **loggingCreate**(`requestContext`, `factoryServiceName`, `request`): `Promise`\<`INoContentResponse`\>

Create a new log entry.

## Parameters

• **requestContext**: `IServiceRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `ILoggingCreateRequest`

The request.

## Returns

`Promise`\<`INoContentResponse`\>

The response object with additional http response properties.
