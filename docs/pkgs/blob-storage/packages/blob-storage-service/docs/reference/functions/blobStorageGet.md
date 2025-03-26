# Function: blobStorageGet()

> **blobStorageGet**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IBlobStorageGetResponse`\>

Get the blob from storage.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IBlobStorageGetRequest`

The request.

## Returns

`Promise`\<`IBlobStorageGetResponse`\>

The response object with additional http response properties.
