# Function: blobStorageSet()

> **blobStorageSet**(`requestContext`, `factoryServiceName`, `request`, `body`?): `Promise`\<`ICreatedResponse`\>

Set a blob in storage.

## Parameters

• **requestContext**: `IRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `IBlobStorageSetRequest`

The request.

• **body?**: `unknown`

The body if required for pure content.

## Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.
