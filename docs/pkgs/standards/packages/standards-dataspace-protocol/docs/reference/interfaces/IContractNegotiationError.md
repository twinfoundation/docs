# Interface: IContractNegotiationError

Interface for Dataspace Protocol Contract Negotiation Error Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-contract-negotiation-error

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
