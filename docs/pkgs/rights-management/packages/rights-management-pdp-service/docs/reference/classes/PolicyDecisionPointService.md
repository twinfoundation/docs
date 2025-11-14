# Class: PolicyDecisionPointService

Class implementation of Policy Decision Point Component.

## Implements

- `IPolicyDecisionPointComponent`

## Constructors

### Constructor

> **new PolicyDecisionPointService**(`options?`): `PolicyDecisionPointService`

Create a new instance of PolicyDecisionPointService (PDP).

#### Parameters

##### options?

[`IPolicyDecisionPointServiceConstructorOptions`](../interfaces/IPolicyDecisionPointServiceConstructorOptions.md)

The options for the component.

#### Returns

`PolicyDecisionPointService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

The class name of the Policy Decision Point Service.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IPolicyDecisionPointComponent.className`

***

### evaluate()

> **evaluate**\<`D`\>(`locator`, `data?`): `Promise`\<`IPolicyDecision`[]\>

Evaluate requests from a Policy Enforcement Point (PEP).
Uses the Policy Management Point (PMP) to retrieve the policies and the
Policy Information Point (PIP) to retrieve additional information.
Executes any actions on the Policy Execution Point (PXP) before and after decision is made.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### locator

`IPolicyLocator`

The locator to find relevant policies.

##### data?

`D`

The data to make a decision on.

#### Returns

`Promise`\<`IPolicyDecision`[]\>

Returns the policy decisions which apply to the data so that the PEP
can manipulate the data accordingly.

#### Implementation of

`IPolicyDecisionPointComponent.evaluate`

***

### registerArbiter()

> **registerArbiter**(`arbiterId`, `arbiter`): `Promise`\<`void`\>

Register an arbiter to use for making decisions.

#### Parameters

##### arbiterId

`string`

The id of the arbiter to register.

##### arbiter

`IPolicyArbiter`

The arbiter to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyDecisionPointComponent.registerArbiter`

***

### unregisterArbiter()

> **unregisterArbiter**(`arbiterId`): `Promise`\<`void`\>

Unregister an arbiter from making decisions.

#### Parameters

##### arbiterId

`string`

The id of the arbiter to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyDecisionPointComponent.unregisterArbiter`
