# Function: identityVerifiableCredentialUnrevoke()

> **identityVerifiableCredentialUnrevoke**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`INoContentResponse`\>

Unrevoke a verifiable credential.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### request

`IIdentityVerifiableCredentialUnrevokeRequest`

The request.

## Returns

`Promise`\<`INoContentResponse`\>

The response object with additional http response properties.
