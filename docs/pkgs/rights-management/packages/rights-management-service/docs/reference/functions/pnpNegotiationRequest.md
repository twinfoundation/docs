# Function: pnpNegotiationRequest()

> **pnpNegotiationRequest**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractNegotiationResponse` \| `IPnpContractResponse`\>

PNP: Request a negotiation.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpNegotiateRequest`

The request.

## Returns

`Promise`\<`IPnpContractNegotiationResponse` \| `IPnpContractResponse`\>

The response object with additional http response properties.
