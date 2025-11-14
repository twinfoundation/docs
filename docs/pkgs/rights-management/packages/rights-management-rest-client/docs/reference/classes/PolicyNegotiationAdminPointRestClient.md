# Class: PolicyNegotiationAdminPointRestClient

Client for performing Rights Management Policy Negotiation Admin through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IPolicyNegotiationAdminPointComponent`

## Constructors

### Constructor

> **new PolicyNegotiationAdminPointRestClient**(`config`): `PolicyNegotiationAdminPointRestClient`

Create a new instance of PolicyNegotiationAdminPointClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`PolicyNegotiationAdminPointRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.className`

***

### get()

> **get**(`policyId`): `Promise`\<`IPolicyNegotiation`\>

Retrieves a policy negotiation.

#### Parameters

##### policyId

`string`

The ID of the policy to retrieve the negotiation for.

#### Returns

`Promise`\<`IPolicyNegotiation`\>

The policy negotiation.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.get`

***

### set()

> **set**(`negotiation`): `Promise`\<`void`\>

Sets a policy negotiation.

#### Parameters

##### negotiation

`IPolicyNegotiation`

The updated policy negotiation.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.set`

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

#### Implementation of

`IPolicyNegotiationAdminPointComponent.remove`

***

### query()

> **query**(`state?`, `cursor?`): `Promise`\<\{ `items`: `IPolicyNegotiation`[]; `cursor?`: `string`; \}\>

Get a list of the negotiations.

#### Parameters

##### state?

`ContractNegotiationStateType`

The state of the negotiations to retrieve.

##### cursor?

`string`

The cursor to use for pagination.

#### Returns

`Promise`\<\{ `items`: `IPolicyNegotiation`[]; `cursor?`: `string`; \}\>

A list of negotiations and cursor if there are more entries.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.query`
