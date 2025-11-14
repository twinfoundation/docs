# Interface: IContractAgreementMessage

Interface for Dataspace Protocol Contract Agreement Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-agreement-message

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

### agreement

> **agreement**: `IOdrlAgreement`

The agreement being sent.

***

### callbackAddress?

> `optional` **callbackAddress**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
