# Function: blobStorageRemove()

> **blobStorageRemove**(`requestContext`, `serviceName`, `request`): `Promise`\<`INoContentResponse`\>

Remove the blob from storage.

## Parameters

• **requestContext**: `IServiceRequestContext`

The request context for the API.

• **serviceName**: `string`

The name of the service to use in the routes.

• **request**: `IBlobStorageRemoveRequest`

The request.

## Returns

`Promise`\<`INoContentResponse`\>

The response object with additional http response properties.
