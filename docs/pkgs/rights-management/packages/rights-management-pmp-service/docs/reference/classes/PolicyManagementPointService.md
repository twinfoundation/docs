# Class: PolicyManagementPointService

Class implementation of Policy Management Point Component.

## Implements

- `IPolicyManagementPointComponent`

## Constructors

### Constructor

> **new PolicyManagementPointService**(`options?`): `PolicyManagementPointService`

Create a new instance of PolicyManagementPointService (PMP).

#### Parameters

##### options?

[`IPolicyManagementPointServiceOptions`](../interfaces/IPolicyManagementPointServiceOptions.md)

The options for the component.

#### Returns

`PolicyManagementPointService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Policy Management Point Service.

#### Implementation of

`IPolicyManagementPointComponent.CLASS_NAME`

## Methods

### retrieve()

> **retrieve**\<`T`\>(`assetType`, `action`, `data`, `userIdentity`, `nodeIdentity`): `Promise`\<`IOdrlPolicy`[]\>

Get the policies from a PAP based on the data and identities.

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

The data to retrieve the policies for.

`undefined` | `T`

##### userIdentity

`string`

The user identity to retrieve the policies for.

##### nodeIdentity

`string`

The node identity to retrieve the policies for.

#### Returns

`Promise`\<`IOdrlPolicy`[]\>

Returns the policies which apply to the data and identities so that the PDP can make a decision.

#### Implementation of

`IPolicyManagementPointComponent.retrieve`
