# Interface: IPolicyNegotiationPointComponent

Interface describing a Policy Negotiation Point (PNP) contract.
When receiving a request from another component, the PNP will negotiate the terms
of the request and determine the appropriate policies to create.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#negotiation-protocol

## Extends

- `IComponent`

## Methods

### getNegotiation()

> **getNegotiation**(`id`, `actionRequest`): `Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

Get the current state of the negotiation.

#### Parameters

##### id

`string`

The id of the negotiation to retrieve.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

The current state of the negotiation or an error.

***

### sendRequestToProvider()

> **sendRequestToProvider**(`url`, `requesterId`, `odrlOfferId`): `Promise`\<`string`\>

Send a request to a provider.

#### Parameters

##### url

`string`

The url of the provider to send the request to.

##### requesterId

`string`

The id of the requester to use for the request, will use the registered requester to provide update.

##### odrlOfferId

`string`

The id of the offer to request.

#### Returns

`Promise`\<`string`\>

The negotiation id.

***

### requestFromConsumer()

> **requestFromConsumer**(`message`, `actionRequest`): `Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

Processes an incoming request on a provider from a consumer.

#### Parameters

##### message

`IContractRequestMessage`

The negotiation request.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

The current state of the contract negotiation or an error.

***

### offerFromProvider()

> **offerFromProvider**(`message`, `actionRequest`): `Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

An offer has been received by a consumer.

#### Parameters

##### message

`IContractOfferMessage`

The offer being received by the consumer.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiation` \| `IContractNegotiationError`\>

The current state of the contract negotiation or an error.

***

### agreementFromProvider()

> **agreementFromProvider**(`message`, `actionRequest`): `Promise`\<`IContractNegotiationError` \| `undefined`\>

An agreement has been received by a consumer.

#### Parameters

##### message

`IContractAgreementMessage`

The agreement message to send.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiationError` \| `undefined`\>

The error if there is one.

***

### agreementVerificationFromConsumer()

> **agreementVerificationFromConsumer**(`message`, `actionRequest`): `Promise`\<`IContractNegotiationError` \| `undefined`\>

An agreement verification has been received by a provider.

#### Parameters

##### message

`IContractAgreementVerificationMessage`

The agreement verification message to send.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiationError` \| `undefined`\>

The error if there is one.

***

### event()

> **event**(`message`, `destination`, `actionRequest`): `Promise`\<`IContractNegotiationError` \| `undefined`\>

An event has been received by the provider or consumer.

#### Parameters

##### message

`IContractNegotiationEventMessage`

The event message to send.

##### destination

The destination is provider or consumer.

`"provider"` | `"consumer"`

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiationError` \| `undefined`\>

The error if there is one.

***

### terminate()

> **terminate**(`message`, `destination`, `actionRequest`): `Promise`\<`IContractNegotiationError` \| `undefined`\>

A termination message has been received by the provider or consumer.

#### Parameters

##### message

`IContractNegotiationTerminationMessage`

The termination message to send.

##### destination

The destination is provider or consumer.

`"provider"` | `"consumer"`

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IContractNegotiationError` \| `undefined`\>

The error if there is one.

***

### registerNegotiator()

> **registerNegotiator**(`negotiatorId`, `negotiator`): `Promise`\<`void`\>

Register a negotiator to use for handling data.

#### Parameters

##### negotiatorId

`string`

The id of the negotiator to register.

##### negotiator

[`IPolicyNegotiator`](IPolicyNegotiator.md)

The negotiator to register.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterNegotiator()

> **unregisterNegotiator**(`negotiatorId`): `Promise`\<`void`\>

Unregister a negotiator from the handling.

#### Parameters

##### negotiatorId

`string`

The id of the negotiator to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### registerRequester()

> **registerRequester**(`requesterId`, `requester`): `Promise`\<`void`\>

Register a requester to use for handle returning offers.

#### Parameters

##### requesterId

`string`

The id of the requester to register.

##### requester

[`IPolicyRequester`](IPolicyRequester.md)

The requester to register.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterRequester()

> **unregisterRequester**(`requesterId`): `Promise`\<`void`\>

Unregister a requester from the handling.

#### Parameters

##### requesterId

`string`

The id of the requester to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### registerOffer()

> **registerOffer**(`offer`): `Promise`\<`void`\>

Register an offer available for negotiation.

#### Parameters

##### offer

`IOdrlOffer`

The offer to register.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterOffer()

> **unregisterOffer**(`offerId`): `Promise`\<`void`\>

Unregister an offer.

#### Parameters

##### offerId

`string`

The id of the offer to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.
