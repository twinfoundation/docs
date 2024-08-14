# Function: attestationAttest()

> **attestationAttest**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IAttestationAttestResponse`\>

Sign the data and return the proof.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **componentName**: `string`

The name of the component to use in the routes.

• **request**: `IAttestationAttestRequest`

The request.

## Returns

`Promise`\<`IAttestationAttestResponse`\>

The response object with additional http response properties.
