# Interface: IPolicyNegotiator

Interface describing a Policy Negotiator.

## Methods

### supportsOffer()

> **supportsOffer**(`offer`): `boolean`

Determines if the negotiator supports the given offer.

#### Parameters

##### offer

`IOdrlOffer`

The offer to check.

#### Returns

`boolean`

Sets the supports flag if it can be offered, and the interventionRequired flag if manual agreement is needed.

***

### handleOffer()

> **handleOffer**(`offer`, `information?`): `Promise`\<\{ `accepted`: `boolean`; `interventionRequired`: `boolean`; \}\>

Handle the offer.

#### Parameters

##### offer

`IOdrlOffer`

The offer to check.

##### information?

[`IPolicyInformation`](IPolicyInformation.md)

Information provided by the requester to determine if a policy can be created.

#### Returns

`Promise`\<\{ `accepted`: `boolean`; `interventionRequired`: `boolean`; \}\>

Sets the accepted flag if it can be offered, and the interventionRequired flag if manual agreement is needed.

***

### createAgreement()

> **createAgreement**(`offer`, `information?`): `Promise`\<`IOdrlAgreement` \| `undefined`\>

Create an agreement based on the offer.

#### Parameters

##### offer

`IOdrlOffer`

The offer to create the agreement from.

##### information?

[`IPolicyInformation`](IPolicyInformation.md)

Information provided by the requester to aid in the creation of the agreement.

#### Returns

`Promise`\<`IOdrlAgreement` \| `undefined`\>

The agreement created from the offer or undefined if an agreement could not be created.
