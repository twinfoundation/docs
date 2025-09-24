# Interface: IIdsContractNegotiationEventMessage

Interface for IDS Contract Negotiation Event Messages.
https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.5-contract-negotiation-event-message

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

### consumerPid

> **consumerPid**: `string`

The consumer id for the contract.

***

### event

> **event**: [`IdsContractNegotiationEventType`](../type-aliases/IdsContractNegotiationEventType.md)

The event type.
