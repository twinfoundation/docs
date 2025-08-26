# Function: serverRoot()

> **serverRoot**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IServerRootResponse`\>

Get the root for the server.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`INoContentRequest`

The request.

## Returns

`Promise`\<`IServerRootResponse`\>

The response object with additional http response properties.
