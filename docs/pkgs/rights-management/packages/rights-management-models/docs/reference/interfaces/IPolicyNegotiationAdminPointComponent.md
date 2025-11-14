# Interface: IPolicyNegotiationAdminPointComponent

Interface describing a Policy Negotiation Admin Point (PNAP) contract.
Components performs administration tasks on the policy negotiations.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#negotiation-protocol

## Extends

- `IComponent`

## Methods

### get()

> **get**(`id`): `Promise`\<[`IPolicyNegotiation`](IPolicyNegotiation.md)\>

Retrieves a policy negotiation.

#### Parameters

##### id

`string`

The ID of the policy to retrieve the negotiation for.

#### Returns

`Promise`\<[`IPolicyNegotiation`](IPolicyNegotiation.md)\>

The policy negotiation.

***

### set()

> **set**(`negotiation`): `Promise`\<`void`\>

Sets a policy negotiation.

#### Parameters

##### negotiation

[`IPolicyNegotiation`](IPolicyNegotiation.md)

The updated policy negotiation.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### remove()

> **remove**(`policyId`): `Promise`\<`void`\>

Cancels an ongoing negotiation for a resource.

#### Parameters

##### policyId

`string`

The ID of the policy to cancel.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`status?`, `cursor?`): `Promise`\<\{ `items`: [`IPolicyNegotiation`](IPolicyNegotiation.md)[]; `cursor?`: `string`; \}\>

Get a list of the negotiations.

#### Parameters

##### status?

`ContractNegotiationStateType`

The state of the negotiations to retrieve.

##### cursor?

`string`

The cursor to use for pagination.

#### Returns

`Promise`\<\{ `items`: [`IPolicyNegotiation`](IPolicyNegotiation.md)[]; `cursor?`: `string`; \}\>

A list of negotiations and cursor if there are more entries.
