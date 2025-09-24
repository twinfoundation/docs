# Function: pnpNegotiationAgreementVerification()

> **pnpNegotiationAgreementVerification**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractResponse`\>

PNP: Set the agreement to verified.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpAgreementVerificationRequest`

The request.

## Returns

`Promise`\<`IPnpContractResponse`\>

The response object with additional http response properties.
