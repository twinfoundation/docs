# Function: identityVerifiablePresentationVerify()

> **identityVerifiablePresentationVerify**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IIdentityVerifiablePresentationVerifyResponse`\>

Verify a verifiable presentation.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityVerifiablePresentationVerifyRequest`

The request.

## Returns

`Promise`\<`IIdentityVerifiablePresentationVerifyResponse`\>

The response object with additional http response properties.
