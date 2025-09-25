# Function: serverFavIcon()

> **serverFavIcon**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IServerFavIconResponse`\>

Get the favicon for the server.

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

`Promise`\<`IServerFavIconResponse`\>

The response object with additional http response properties.
