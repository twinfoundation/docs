# Interface: IPolicyNegotiationPointServiceConfig

Options for the Policy Negotiation Point Component.

## Properties

### baseCallbackUrl

> **baseCallbackUrl**: `string`

The url to send in negotiation messages as the callback address.
This should be the externally reachable url of this PNP service.

***

### negotiationComponentCreator()

> **negotiationComponentCreator**: (`url`) => `Promise`\<`IPolicyNegotiationPointComponent`\>

A method for creating a new instance of the policy negotiation point component.
To be used when sending request remotely to another node.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`IPolicyNegotiationPointComponent`\>

***

### negotiators?

> `optional` **negotiators**: `object`[]

Initial negotiators to register with the PNP.

#### negotiatorId

> **negotiatorId**: `string`

#### negotiator

> **negotiator**: `IPolicyNegotiator`

***

### requesters?

> `optional` **requesters**: `object`[]

Initial requesters to handle offers from the PNP.

#### requesterId

> **requesterId**: `string`

#### requester

> **requester**: `IPolicyRequester`

***

### offers?

> `optional` **offers**: `IOdrlOffer`[]

These offers can be registered to provide offers for negotiation.
