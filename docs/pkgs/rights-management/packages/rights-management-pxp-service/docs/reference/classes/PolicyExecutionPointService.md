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

[`IPolicyExecutionPointServiceOptions`](../interfaces/IPolicyExecutionPointServiceOptions.md)

The options for the component.

#### Returns

`PolicyExecutionPointService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Policy Execution Point Service.

#### Implementation of

`IPolicyExecutionPointComponent.CLASS_NAME`

## Methods

### executeActions()

> **executeActions**\<`T`\>(`stage`, `assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`, `policies`): `Promise`\<`void`\>

Execute actions based on the PDP's decisions.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### stage

`PolicyDecisionStage`

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

#### Implementation of

`IPolicyExecutionPointComponent.executeActions`

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

`PolicyDecisionStage`

The stage at which the action should be executed.

##### action

`PolicyActionCallback`\<`T`\>

The action to execute.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyExecutionPointComponent.registerAction`

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

#### Implementation of

`IPolicyExecutionPointComponent.unregisterAction`
