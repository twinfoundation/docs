# Function: identityVerifiableCredentialVerify()

> **identityVerifiableCredentialVerify**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IIdentityVerifiableCredentialVerifyResponse`\>

Verify a verifiable credential.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityVerifiableCredentialVerifyRequest`

The request.

## Returns

`Promise`\<`IIdentityVerifiableCredentialVerifyResponse`\>

The response object with additional http response properties.
