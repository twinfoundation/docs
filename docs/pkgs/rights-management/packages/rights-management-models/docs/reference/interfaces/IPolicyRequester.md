# Interface: IPolicyRequester

Interface describing a Policy Requester.

## Methods

### offer()

> **offer**(`negotiationId`, `offer`): `Promise`\<`boolean`\>

A policy has been offered by a provider, let the requester know about it.

#### Parameters

##### negotiationId

`string`

The id of the negotiation.

##### offer

`IOdrlOffer`

The offer sent by the provider.

#### Returns

`Promise`\<`boolean`\>

True if the offer was accepted, false otherwise.

***

### agreement()

> **agreement**(`negotiationId`, `agreement`): `Promise`\<`boolean`\>

A policy agreement has been sent by a provider, let the requester know about it.

#### Parameters

##### negotiationId

`string`

The id of the negotiation.

##### agreement

`IOdrlAgreement`

The agreement sent by the provider.

#### Returns

`Promise`\<`boolean`\>

True if the agreement was accepted, false otherwise.

***

### finalised()

> **finalised**(`negotiationId`): `Promise`\<`void`\>

A policy finalisation has been sent by a provider, let the requester know about it.

#### Parameters

##### negotiationId

`string`

The id of the negotiation.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### terminated()

> **terminated**(`negotiationId`): `Promise`\<`void`\>

A policy termination has been sent by a provider, let the requester know about it.

#### Parameters

##### negotiationId

`string`

The id of the negotiation.

#### Returns

`Promise`\<`void`\>

Nothing.
