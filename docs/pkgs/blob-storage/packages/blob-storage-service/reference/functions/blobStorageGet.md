# Function: blobStorageGet()

> **blobStorageGet**(`requestContext`, `serviceName`, `request`, `body`?): `Promise`\<`IBlobStorageGetResponse`\>

Get the blob from storage.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **serviceName**: `string`

The name of the service to use in the routes.

• **request**: `IBlobStorageGetRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`IBlobStorageGetResponse`\>

The response object with additional http response properties.
