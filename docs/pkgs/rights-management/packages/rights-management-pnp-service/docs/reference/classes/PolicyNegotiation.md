# Class: PolicyNegotiation

Class describing a rights management policy negotiation.

## Constructors

### Constructor

> **new PolicyNegotiation**(): `PolicyNegotiation`

#### Returns

`PolicyNegotiation`

## Properties

### id

> **id**: `string`

An id to help identify the negotiation on the provider's side.

***

### correlationId

> **correlationId**: `string`

This is used by the other side of the negotiation.

***

### policyId?

> `optional` **policyId**: `string`

The unique identifier for the policy.

***

### dateCreated

> **dateCreated**: `string`

The date and time when the negotiation was created.

***

### expires?

> `optional` **expires**: `number`

The expiration time for the policy negotiation.

***

### state

> **state**: `ContractNegotiationStateType`

The status of the negotiation.

***

### callbackAddress?

> `optional` **callbackAddress**: `string`

The callback address to send updates to the requester.

***

### offer?

> `optional` **offer**: `IOdrlOffer`

The offer being requested.

***

### agreement?

> `optional` **agreement**: `IOdrlAgreement`

The agreement being established if the negotiation was successful.

***

### information?

> `optional` **information**: `IPolicyInformation`

Additional information supplied by the consumer to help with negotiation.

***

### code?

> `optional` **code**: `string`

A reason code for when the negotiation errors.

***

### reason?

> `optional` **reason**: `object`[]

A more detailed reason for the negotiation error reason.

#### @value

> **@value**: `string`

#### @language?

> `optional` **@language**: `string`

***

### description?

> `optional` **description**: `object`[]

A more detailed reason for the negotiation error description.

#### @value

> **@value**: `string`

#### @language?

> `optional` **@language**: `string`

***

### handlerId?

> `optional` **handlerId**: `string`

The id of the handler, on provider side this is the negotiator, on consumer side this is the requester.

***

### interventionRequired?

> `optional` **interventionRequired**: `boolean`

Is manual intervention required to complete the negotiation?
