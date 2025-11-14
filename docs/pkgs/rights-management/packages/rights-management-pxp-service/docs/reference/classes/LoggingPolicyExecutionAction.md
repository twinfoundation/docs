# Class: LoggingPolicyExecutionAction

Logging Policy Execution Action to send decisions to logging.

## Implements

- `IPolicyExecutionAction`
- `IComponent`

## Constructors

### Constructor

> **new LoggingPolicyExecutionAction**(`options?`): `LoggingPolicyExecutionAction`

Create a new instance of LoggingPolicyExecutionAction.

#### Parameters

##### options?

[`ILoggingPolicyExecutionActionConstructorOptions`](../interfaces/ILoggingPolicyExecutionActionConstructorOptions.md)

The options for the logging policy execution action.

#### Returns

`LoggingPolicyExecutionAction`

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

`IComponent.className`

***

### supportedStages()

> **supportedStages**(): `PolicyDecisionStage`[]

Which stages should the action be executed at.

#### Returns

`PolicyDecisionStage`[]

List of stages.

#### Implementation of

`IPolicyExecutionAction.supportedStages`

***

### execute()

> **execute**\<`D`\>(`stage`, `locator`, `policies?`, `decisions?`, `data?`): `Promise`\<`void`\>

Execute function type for policy actions.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### stage

`PolicyDecisionStage`

The stage of the policy decision.

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

The data to process.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the action is complete.

#### Implementation of

`IPolicyExecutionAction.execute`
