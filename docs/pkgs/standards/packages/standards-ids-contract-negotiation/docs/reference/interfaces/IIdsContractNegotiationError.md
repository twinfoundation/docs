# Interface: IIdsContractNegotiationError

Interface for IDS Contract Negotiation Error Messages.
https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-3.2-error-contract-negotiation-error

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

The error code.

***

### reason?

> `optional` **reason**: `object`[]

The error reason(s).

#### @value

> **@value**: `string`

#### @language?

> `optional` **@language**: `string`

***

### description?

> `optional` **description**: `object`[]

The error description(s).

#### @value

> **@value**: `string`

#### @language?

> `optional` **@language**: `string`
