# Function: identityProofVerify()

> **identityProofVerify**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IIdentityProofVerifyResponse`\>

Verify an identity proof.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityProofVerifyRequest`

The request.

## Returns

`Promise`\<`IIdentityProofVerifyResponse`\>

The response object with additional http response properties.
