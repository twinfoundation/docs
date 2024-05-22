# Function: loggingList()

> **loggingList**(`requestContext`, `factoryServiceName`, `request`, `body`?): `Promise`\<`ILoggingListResponse`\>

Get a list of the logging entries.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `ILoggingListRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`ILoggingListResponse`\>

The response object with additional http response properties.
