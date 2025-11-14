# Class: PolicyExecutionPointService

Class implementation of Policy Execution Point Component.

## Implements

- `IPolicyExecutionPointComponent`

## Constructors

### Constructor

> **new PolicyExecutionPointService**(`options?`): `PolicyExecutionPointService`

Create a new instance of PolicyExecutionPointService (PXP).

#### Parameters

##### options?

[`IPolicyExecutionPointServiceConstructorOptions`](../interfaces/IPolicyExecutionPointServiceConstructorOptions.md)

The options for the component.

#### Returns

`PolicyExecutionPointService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

The class name of the Policy Execution Point Service.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IPolicyExecutionPointComponent.className`

***

### executeActions()

> **executeActions**\<`D`\>(`stage`, `locator`, `policies?`, `decisions?`, `data?`): `Promise`\<`void`\>

Execute actions based on the PDP's decisions.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### stage

`PolicyDecisionStage`

The stage at which the PXP is executed in the PDP.

##### locator

`IPolicyLocator`

The locator to find relevant policies.

##### policies?

`IOdrlPolicy`[]

The policies that apply to the data.

##### decisions?

`IPolicyDecision`[]

The decisions made by the PDP.

##### data?

`D`

The data used in the decision by the PDP.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyExecutionPointComponent.executeActions`

***

### registerAction()

> **registerAction**(`actionId`, `stage`, `action`): `Promise`\<`void`\>

Register an action to be executed.

#### Parameters

##### actionId

`string`

The id of the action to register.

##### stage

`PolicyDecisionStage`

The stage at which the action should be executed.

##### action

`IPolicyExecutionAction`

The action to execute.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyExecutionPointComponent.registerAction`

***

### unregisterAction()

> **unregisterAction**(`actionId`, `stage`): `Promise`\<`void`\>

Unregister an action from the execution point.

#### Parameters

##### actionId

`string`

The id of the action to unregister.

##### stage

`PolicyDecisionStage`

The stage at which the action was executed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyExecutionPointComponent.unregisterAction`
