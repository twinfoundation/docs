# Function: identityCreate()

> **identityCreate**(`requestContext`, `serviceName`, `request`, `body`?): `Promise`\<`ICreatedResponse`\>

Create a new identity.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **serviceName**: `string`

The name of the service to use in the routes.

• **request**: `IIdentityCreateRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.
