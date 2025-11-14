# Interface: IContractNegotiationTerminationMessage

Interface for Dataspace Protocol Contract Negotiation Termination Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-termination-message

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

### code?

> `optional` **code**: `string`

The termination code.

***

### reason?

> `optional` **reason**: `any`[]

The termination reason(s).
