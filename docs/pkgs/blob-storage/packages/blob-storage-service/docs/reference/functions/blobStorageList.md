# Function: blobStorageList()

> **blobStorageList**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IBlobStorageListResponse`\>

List the entries from blob storage.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IBlobStorageListRequest`

The request.

## Returns

`Promise`\<`IBlobStorageListResponse`\>

The response object with additional http response properties.
