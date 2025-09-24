# Interface: IPolicyDecisionPointComponent

Interface describing a Policy Decision Point (PDP) contract.
Decides if a party can be granted access to a resource, will retrieve policies
from the Policy Management Point (PMP) and any additional information from the
Policy Information Point (PIP). When a decision is made, the Policy Execution
Point (PEP) will execute any registered actions.

## Extends

- `IComponent`

## Methods

### evaluate()

> **evaluate**\<`D`\>(`locator`, `data?`): `Promise`\<[`IPolicyDecision`](IPolicyDecision.md)[]\>

Evaluate requests from a Policy Enforcement Point (PEP).
Uses the Policy Management Point (PMP) to retrieve the policies and the
Policy Information Point (PIP) to retrieve additional information.
Executes any actions on the Policy Execution Point (PXP) before and after decision is made.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### data?

`D`

The data to make a decision on.

#### Returns

`Promise`\<[`IPolicyDecision`](IPolicyDecision.md)[]\>

Returns the policy decisions which apply to the data so that the PEP
can manipulate the data accordingly.

***

### registerArbiter()

> **registerArbiter**(`arbiterId`, `arbiter`): `Promise`\<`void`\>

Register an arbiter to use for making decisions.

#### Parameters

##### arbiterId

`string`

The id of the arbiter to register.

##### arbiter

[`IPolicyArbiter`](IPolicyArbiter.md)

The arbiter to register.

#### Returns

`Promise`\<`void`\>

Nothing.

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
