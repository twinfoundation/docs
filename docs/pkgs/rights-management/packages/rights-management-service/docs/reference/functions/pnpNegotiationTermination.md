# Function: pnpNegotiationTermination()

> **pnpNegotiationTermination**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractResponse`\>

PNP: Terminate the provider negotiation.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpTerminateRequest`

The request.

## Returns

`Promise`\<`IPnpContractResponse`\>

The response object with additional http response properties.
