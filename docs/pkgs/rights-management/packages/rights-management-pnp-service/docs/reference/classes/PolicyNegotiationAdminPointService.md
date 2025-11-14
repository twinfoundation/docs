# Class: PolicyNegotiationAdminPointService

Class implementation of Policy Negotiation Admin Point Component.

## Implements

- `IPolicyNegotiationAdminPointComponent`

## Constructors

### Constructor

> **new PolicyNegotiationAdminPointService**(`options?`): `PolicyNegotiationAdminPointService`

Create a new instance of PolicyNegotiationPointService (PNP).

#### Parameters

##### options?

[`IPolicyNegotiationAdminPointServiceConstructorOptions`](../interfaces/IPolicyNegotiationAdminPointServiceConstructorOptions.md)

The options for the component.

#### Returns

`PolicyNegotiationAdminPointService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

The class name of the Policy Negotiation Admin Point Service.

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

### start()

> **start**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.start`

***

### stop()

> **stop**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.stop`

***

### get()

> **get**(`id`): `Promise`\<`IPolicyNegotiation`\>

Retrieves a policy negotiation.

#### Parameters

##### id

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

> **query**(`status?`, `cursor?`): `Promise`\<\{ `items`: `IPolicyNegotiation`[]; `cursor?`: `string`; \}\>

Get a list of the negotiations.

#### Parameters

##### status?

`ContractNegotiationStateType`

The status of the negotiations to retrieve.

##### cursor?

`string`

The cursor to use for pagination.

#### Returns

`Promise`\<\{ `items`: `IPolicyNegotiation`[]; `cursor?`: `string`; \}\>

A list of negotiations and cursor if there are more entries.

#### Implementation of

`IPolicyNegotiationAdminPointComponent.query`
