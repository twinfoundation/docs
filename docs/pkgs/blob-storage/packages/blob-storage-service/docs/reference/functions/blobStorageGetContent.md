# Function: blobStorageGetContent()

> **blobStorageGetContent**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IBlobStorageGetContentResponse` & `IRestRouteResponseOptions`\>

Get the blob from storage.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IBlobStorageGetContentRequest`

The request.

## Returns

`Promise`\<`IBlobStorageGetContentResponse` & `IRestRouteResponseOptions`\>

The response object with additional http response properties.
