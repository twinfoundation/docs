# Interface: IIdsContractNegotiationTerminationMessage

Interface for IDS Contract Negotiation Termination Messages.
https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.6-contract-negotiation-termination-message

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

### code?

> `optional` **code**: `string`

The termination code.

***

### reason?

> `optional` **reason**: `any`[]

The termination reason(s).
