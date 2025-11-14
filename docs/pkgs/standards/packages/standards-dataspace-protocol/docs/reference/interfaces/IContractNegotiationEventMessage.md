# Interface: IContractNegotiationEventMessage

Interface for Dataspace Protocol Contract Negotiation Event Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message

## Properties

### @context

> **@context**: [`ContractNegotiationContextType`](../type-aliases/ContractNegotiationContextType.md)

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

> **event**: [`ContractNegotiationEventType`](../type-aliases/ContractNegotiationEventType.md)

The event type.
