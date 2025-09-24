# Function: pnpNegotiationProviderEvents()

> **pnpNegotiationProviderEvents**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractResponse`\>

PNP: Update state of negotiation.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpEventRequest`

The request.

## Returns

`Promise`\<`IPnpContractResponse`\>

The response object with additional http response properties.
