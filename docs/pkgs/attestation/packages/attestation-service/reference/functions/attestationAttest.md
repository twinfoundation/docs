# Function: attestationAttest()

> **attestationAttest**(`httpRequestContext`, `factoryServiceName`, `request`): `Promise`\<`IAttestationAttestResponse`\>

Sign the data and return the proof.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `IAttestationAttestRequest`

The request.

## Returns

`Promise`\<`IAttestationAttestResponse`\>

The response object with additional http response properties.
