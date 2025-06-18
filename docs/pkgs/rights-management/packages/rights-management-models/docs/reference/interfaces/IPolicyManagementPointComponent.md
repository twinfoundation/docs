# Interface: IPolicyManagementPointComponent

Interface describing a Policy Management Point (PMP) contract.
Provide the policies to the Policy Decision Point (PDP) based on the data and identities.

## Extends

- `IComponent`

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
