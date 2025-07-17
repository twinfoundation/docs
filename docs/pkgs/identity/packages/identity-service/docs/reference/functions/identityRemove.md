# Function: identityRemove()

> **identityRemove**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`INoContentResponse`\>

Remove an identity.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityRemoveRequest`

The request.

## Returns

`Promise`\<`INoContentResponse`\>

The response object with additional http response properties.
