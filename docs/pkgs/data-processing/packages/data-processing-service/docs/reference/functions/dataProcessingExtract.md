# Function: dataProcessingExtract()

> **dataProcessingExtract**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IDataProcessingExtractResponse`\>

Extract data using the specified rule group.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IDataProcessingExtractRequest`

The request.

## Returns

`Promise`\<`IDataProcessingExtractResponse`\>

The response object with additional http response properties.
