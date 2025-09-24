# Interface: IPolicyNegotiation

Interface describing a rights management policy negotiation.

## Extends

- [`IPolicyLocator`](IPolicyLocator.md)

## Properties

### assignee?

> `optional` **assignee**: `string`

The assignee for the locator.

#### Inherited from

[`IPolicyLocator`](IPolicyLocator.md).[`assignee`](IPolicyLocator.md#assignee)

***

### action?

> `optional` **action**: `string`

The action for the locator.

#### Inherited from

[`IPolicyLocator`](IPolicyLocator.md).[`action`](IPolicyLocator.md#action)

***

### assetType?

> `optional` **assetType**: `string`

The asset type for the locator.

#### Inherited from

[`IPolicyLocator`](IPolicyLocator.md).[`assetType`](IPolicyLocator.md#assettype)

***

### resourceId?

> `optional` **resourceId**: `string`

A resource identifier for the locator.

#### Inherited from

[`IPolicyLocator`](IPolicyLocator.md).[`resourceId`](IPolicyLocator.md#resourceid)

***

### id

> **id**: `string`

The primary id used by the provider.

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

The expiration time for the policy negotiation if it's a manual process.

***

### state

> **state**: `IdsContractNegotiationStateType`

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

> `optional` **information**: [`IPolicyInformation`](IPolicyInformation.md)

Additional information supplied by the consumer to help with negotiation.

***

### code?

> `optional` **code**: `string`

A reason code for when the negotiation errors.

***

### reason?

> `optional` **reason**: `object`[]

A more detailed reason for the negotiation error.

#### @value

> **@value**: `string`

#### @language?

> `optional` **@language**: `string`

***

### description?

> `optional` **description**: `object`[]

A more detailed reason for the negotiation error.

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
