# Interface: IIdsContractOfferMessage

Interface for IDS Contract Offer Messages.
https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.2-contract-offer-message

## Properties

### @context

> **@context**: [`IdsContractNegotiationContextType`](../type-aliases/IdsContractNegotiationContextType.md)

The JSON-LD context.

***

### @type

> **@type**: `string`

The type of the message.

***

### providerPid

> **providerPid**: `string`

The provider id for the contract.

***

### consumerPid?

> `optional` **consumerPid**: `string`

The consumer id for the contract.

***

### offer

> **offer**: `IOdrlOffer`

The offer being requested.

***

### callbackAddress?

> `optional` **callbackAddress**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
