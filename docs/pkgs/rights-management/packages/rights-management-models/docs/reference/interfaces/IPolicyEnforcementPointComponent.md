# Interface: IPolicyEnforcementPointComponent

Interface describing a Policy Enforcement Point (PEP) contract.
Intercepts data and uses the Policy Decision Point (PDP) to make decisions on
access to a resource, based on the decision a manipulated data object can
be returned.

## Extends

- `IComponent`

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

`string`

The user identity to use in the decision making.

##### nodeIdentity

`string`

The node identity to use in the decision making.

#### Returns

`Promise`\<`undefined` \| `T`\>

The manipulated data with any policies applied.
