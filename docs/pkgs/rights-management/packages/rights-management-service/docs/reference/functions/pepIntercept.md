# Function: pepIntercept()

> **pepIntercept**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPepInterceptResponse`\>

PEP: Intercept.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPepInterceptRequest`

The request.

## Returns

`Promise`\<`IPepInterceptResponse`\>

The response object with additional http response properties.
