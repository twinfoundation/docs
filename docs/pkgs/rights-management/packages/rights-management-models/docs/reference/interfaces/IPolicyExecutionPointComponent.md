# Interface: IPolicyExecutionPointComponent

Interface describing a Policy Execution Point (PXP) contract.
When a decision is made by the Policy Decision Point (PDP),
the Policy Execution Point (PXP) will execute any
registered actions based on the decision.

## Extends

- `IComponent`

## Methods

### executeActions()

> **executeActions**\<`T`\>(`stage`, `assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`, `policies`): `Promise`\<`void`\>

Execute actions based on the PDP's decisions.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage at which the PXP is executed in the PDP.

##### assetType

`string`

The type of asset being processed.

##### action

`string`

The action being performed on the asset.

##### data

The data used in the decision by the PDP.

`undefined` | `T`

##### userIdentity

`string`

The user identity to use in the decision making.

##### nodeIdentity

`string`

The node identity to use in the decision making.

##### policies

`IOdrlPolicy`[]

The policies that apply to the data.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### registerAction()

> **registerAction**\<`T`\>(`actionId`, `stage`, `action`): `Promise`\<`void`\>

Register an action to be executed.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### actionId

`string`

The id of the action to register.

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage at which the action should be executed.

##### action

[`PolicyActionCallback`](../type-aliases/PolicyActionCallback.md)\<`T`\>

The action to execute.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unregisterAction()

> **unregisterAction**(`actionId`): `Promise`\<`void`\>

Unregister an action from the execution point.

#### Parameters

##### actionId

`string`

The id of the action to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.
