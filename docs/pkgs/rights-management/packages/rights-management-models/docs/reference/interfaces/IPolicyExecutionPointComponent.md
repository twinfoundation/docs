# Interface: IPolicyExecutionPointComponent

Interface describing a Policy Execution Point (PXP) contract.
When a decision is made by the Policy Decision Point (PDP),
the Policy Execution Point (PXP) will execute any
registered actions based on the decision.

## Extends

- `IComponent`

## Methods

### executeActions()

> **executeActions**\<`D`\>(`stage`, `locator`, `policies?`, `decisions?`, `data?`): `Promise`\<`void`\>

Execute actions based on the PDP's decisions.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage at which the PXP is executed in the PDP.

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### policies?

`IOdrlPolicy`[]

The policies that apply to the data.

##### decisions?

[`IPolicyDecision`](IPolicyDecision.md)[]

The decisions made by the PDP.

##### data?

`D`

The data used in the decision by the PDP.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### registerAction()

> **registerAction**(`actionId`, `stage`, `action`): `Promise`\<`void`\>

Register an action to be executed.

#### Parameters

##### actionId

`string`

The id of the action to register.

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage at which the action should be executed.

##### action

[`IPolicyExecutionAction`](IPolicyExecutionAction.md)

The action to execute.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterAction()

> **unregisterAction**(`actionId`, `stage`): `Promise`\<`void`\>

Unregister an action from the execution point.

#### Parameters

##### actionId

`string`

The id of the action to unregister.

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage at which the action was executed.

#### Returns

`Promise`\<`void`\>

Nothing.
