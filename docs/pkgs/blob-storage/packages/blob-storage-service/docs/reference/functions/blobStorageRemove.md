# Function: blobStorageRemove()

> **blobStorageRemove**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`INoContentResponse`\>

Remove the blob from storage.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IBlobStorageRemoveRequest`

The request.

## Returns

`Promise`\<`INoContentResponse`\>

The response object with additional http response properties.
