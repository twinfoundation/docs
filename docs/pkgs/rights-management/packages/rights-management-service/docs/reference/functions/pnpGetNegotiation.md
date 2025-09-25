# Function: pnpGetNegotiation()

> **pnpGetNegotiation**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractNegotiationResponse`\>

PNP: Get negotiation.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpNegotiationGetRequest`

The request.

## Returns

`Promise`\<`IPnpContractNegotiationResponse`\>

The response object with additional http response properties.
