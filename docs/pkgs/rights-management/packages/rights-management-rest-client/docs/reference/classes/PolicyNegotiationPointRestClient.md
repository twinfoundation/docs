# Class: PolicyNegotiationPointRestClient

Client for performing Rights Management Policy Negotiation through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IPolicyNegotiationPointComponent`

## Constructors

### Constructor

> **new PolicyNegotiationPointRestClient**(`config`): `PolicyNegotiationPointRestClient`

Create a new instance of PolicyNegotiationPointRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`PolicyNegotiationPointRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IPolicyNegotiationPointComponent.className`

***

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

#### Implementation of

`IPolicyNegotiationPointComponent.getNegotiation`

***

### sendRequestToProvider()

> **sendRequestToProvider**(`url`, `requesterId`, `odrlOfferId`): `Promise`\<`string`\>

Send a request to a provider - not supported in the REST client.

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

#### Implementation of

`IPolicyNegotiationPointComponent.sendRequestToProvider`

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

#### Implementation of

`IPolicyNegotiationPointComponent.requestFromConsumer`

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

#### Implementation of

`IPolicyNegotiationPointComponent.offerFromProvider`

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

#### Implementation of

`IPolicyNegotiationPointComponent.agreementFromProvider`

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

#### Implementation of

`IPolicyNegotiationPointComponent.agreementVerificationFromConsumer`

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

#### Implementation of

`IPolicyNegotiationPointComponent.event`

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

#### Implementation of

`IPolicyNegotiationPointComponent.terminate`

***

### registerNegotiator()

> **registerNegotiator**(`negotiatorId`, `negotiator`): `Promise`\<`void`\>

Register a negotiator to use for handling data - not supported in the REST client.

#### Parameters

##### negotiatorId

`string`

The id of the negotiator to register.

##### negotiator

`IPolicyNegotiator`

The negotiator to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.registerNegotiator`

***

### unregisterNegotiator()

> **unregisterNegotiator**(`negotiatorId`): `Promise`\<`void`\>

Unregister a negotiator from the handling - not supported in the REST client.

#### Parameters

##### negotiatorId

`string`

The id of the negotiator to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.unregisterNegotiator`

***

### registerRequester()

> **registerRequester**(`requesterId`, `requester`): `Promise`\<`void`\>

Register a requester to use for handle returning offers - not supported in the REST client.

#### Parameters

##### requesterId

`string`

The id of the requester to register.

##### requester

`IPolicyRequester`

The requester to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.registerRequester`

***

### unregisterRequester()

> **unregisterRequester**(`requesterId`): `Promise`\<`void`\>

Unregister a requester from the handling - not supported in the REST client.

#### Parameters

##### requesterId

`string`

The id of the requester to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.unregisterRequester`

***

### registerOffer()

> **registerOffer**(`offer`): `Promise`\<`void`\>

Register an offer available for negotiation - not supported in the REST client.

#### Parameters

##### offer

`IOdrlOffer`

The offer to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.registerOffer`

***

### unregisterOffer()

> **unregisterOffer**(`offerId`): `Promise`\<`void`\>

Unregister an offer - not supported in the REST client.

#### Parameters

##### offerId

`string`

The id of the offer to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationPointComponent.unregisterOffer`
