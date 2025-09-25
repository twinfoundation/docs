# Function: pnpNegotiationOffer()

> **pnpNegotiationOffer**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`IPnpContractNegotiationResponse` \| `IPnpContractResponse`\>

PNP: Send the offer to the consumer.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`IPnpOfferRequest`

The request.

## Returns

`Promise`\<`IPnpContractNegotiationResponse` \| `IPnpContractResponse`\>

The response object with additional http response properties.
