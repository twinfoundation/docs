# Function: blobStorageGet()

> **blobStorageGet**(`requestContext`, `serviceName`, `request`): `Promise`\<`IBlobStorageGetResponse`\>

Get the blob from storage.

## Parameters

• **requestContext**: `IServiceRequestContext`

The request context for the API.

• **serviceName**: `string`

The name of the service to use in the routes.

• **request**: `IBlobStorageGetRequest`

The request.

## Returns

`Promise`\<`IBlobStorageGetResponse`\>

The response object with additional http response properties.
