# Function: identityResolve()

> **identityResolve**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IIdentityResolveResponse`\>

Resolve an identity.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityResolveRequest`

The request.

## Returns

`Promise`\<`IIdentityResolveResponse`\>

The response object with additional http response properties.
