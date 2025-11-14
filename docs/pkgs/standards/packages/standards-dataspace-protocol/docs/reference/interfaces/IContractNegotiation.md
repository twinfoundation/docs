# Interface: IContractNegotiation

Interface for Dataspace Protocol Contract Agreement Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#ack-contract-negotiation

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

### state

> **state**: [`ContractNegotiationStateType`](../type-aliases/ContractNegotiationStateType.md)

The offer being requested.
