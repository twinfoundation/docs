# Class: PolicyEnforcementPointService

Class implementation of Policy Enforcement Point Component.

## Implements

- `IPolicyEnforcementPointComponent`

## Constructors

### Constructor

> **new PolicyEnforcementPointService**(`options?`): `PolicyEnforcementPointService`

Create a new instance of PolicyEnforcementPointService (PEP).

#### Parameters

##### options?

[`IPolicyEnforcementPointServiceOptions`](../interfaces/IPolicyEnforcementPointServiceOptions.md)

The options for the component.

#### Returns

`PolicyEnforcementPointService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Policy Enforcement Point Service.

#### Implementation of

`IPolicyEnforcementPointComponent.CLASS_NAME`

## Methods

### intercept()

> **intercept**\<`T`\>(`assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`): `Promise`\<`undefined` \| `T`\>

Process the data using Policy Decision Point (PDP) and return the manipulated data.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### assetType

`string`

The type of asset being processed.

##### action

`string`

The action being performed on the asset.

##### data

The data to process.

`undefined` | `T`

##### userIdentity

The user identity to use in the decision making.

`undefined` | `string`

##### nodeIdentity

The node identity to use in the decision making.

`undefined` | `string`

#### Returns

`Promise`\<`undefined` \| `T`\>

The manipulated data with any policies applied.

#### Implementation of

`IPolicyEnforcementPointComponent.intercept`
