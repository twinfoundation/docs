# Function: attestationAttest()

> **attestationAttest**(`requestContext`, `factoryServiceName`, `request`, `body`?): `Promise`\<`IAttestationAttestResponse`\>

Sign the data and return the proof.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `IAttestationAttestRequest`\<`unknown`\>

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`IAttestationAttestResponse`\>

The response object with additional http response properties.
