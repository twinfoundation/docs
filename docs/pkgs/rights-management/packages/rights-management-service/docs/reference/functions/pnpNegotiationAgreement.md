# Function: pnpNegotiationAgreement()

> **pnpNegotiationAgreement**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractResponse`\>

PNP: Send the agreement to the consumer.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpAgreementRequest`

The request.

## Returns

`Promise`\<`IPnpContractResponse`\>

The response object with additional http response properties.
