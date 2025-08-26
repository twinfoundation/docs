# Function: activityLogEntryGet()

> **activityLogEntryGet**(`httpRequestContext`, `factoryServiceName`, `request`): `Promise`\<`IActivityLogEntryGetResponse` \| `INotFoundResponse`\>

Get an Activity Log entry.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### factoryServiceName

`string`

The name of the service to use in the routes.

### request

`IActivityLogEntryGetRequest`

The request.

## Returns

`Promise`\<`IActivityLogEntryGetResponse` \| `INotFoundResponse`\>

The response object with additional http response properties.
