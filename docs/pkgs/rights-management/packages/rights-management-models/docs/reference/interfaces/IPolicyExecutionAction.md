# Interface: IPolicyExecutionAction

Interface for policy execution actions.

## Methods

### supportedStages()

> **supportedStages**(): [`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)[]

Which stages should the action be executed at.

#### Returns

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)[]

List of stages.

***

### execute()

> **execute**\<`D`\>(`stage`, `locator`, `policies?`, `decisions?`, `data?`): `Promise`\<`void`\>

Execute function type for policy actions.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### stage

[`PolicyDecisionStage`](../type-aliases/PolicyDecisionStage.md)

The stage of the policy decision.

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

The data to process.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the action is complete.
