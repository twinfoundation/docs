# Function: attestationSign()

> **attestationSign**(`requestContext`, `factoryServiceName`, `request`, `body`?): `Promise`\<`IAttestationSignResponse`\>

Sign the data and return the proof.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `IAttestationSignRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`IAttestationSignResponse`\>

The response object with additional http response properties.
