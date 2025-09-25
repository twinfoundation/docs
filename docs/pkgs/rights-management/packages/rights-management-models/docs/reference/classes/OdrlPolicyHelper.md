# Class: OdrlPolicyHelper

Helper methods for Odrl Policies.

## Constructors

### Constructor

> **new OdrlPolicyHelper**(): `OdrlPolicyHelper`

#### Returns

`OdrlPolicyHelper`

## Methods

### findExpirationDate()

> `static` **findExpirationDate**(`policy`, `assetType?`, `action?`): `undefined` \| `string`

Find the expiration date of the policy.

#### Parameters

##### policy

`IOdrlPolicy`

The policy to check.

##### assetType?

`string`

The type of the asset, if undefined will match any asset type.

##### action?

`string`

The action to check, if undefined will match any action.

#### Returns

`undefined` \| `string`

The expiration date of the policy, or undefined if not found.

***

### matchAsset()

> `static` **matchAsset**(`target?`, `matchAssetType?`, `matchResourceId?`): `boolean`

Match the target to the requested asset type.

#### Parameters

##### target?

The target to match.

`string` | `IOdrlAsset` | (`string` \| `IOdrlAsset`)[]

##### matchAssetType?

`string`

The asset type to match.

##### matchResourceId?

`string`

The resource id to match.

#### Returns

`boolean`

True if the target is empty, the target matches the requested asset, false otherwise.

***

### matchAction()

> `static` **matchAction**(`action?`, `matchAction?`): `boolean`

Match the action to the asset type.

#### Parameters

##### action?

The action to match.

`string` | `IOdrlAction` | (`string` \| `IOdrlAction`)[]

##### matchAction?

`string`

The action to match.

#### Returns

`boolean`

True if the action is empty, the action matches the asset type, false otherwise.

***

### matchAssignee()

> `static` **matchAssignee**(`assignee?`, `matchAssignee?`): `boolean`

Match the assignee.

#### Parameters

##### assignee?

The assignee to match.

`string` | `IOdrlParty`

##### matchAssignee?

`string`

The assignee to match.

#### Returns

`boolean`

True if the assignee is empty, the assignee matches the asset type, false otherwise.

***

### matchTargetAndAction()

> `static` **matchTargetAndAction**(`target?`, `action?`, `locator?`): `boolean`

Match the target and action to the requested asset type and action.

#### Parameters

##### target?

The target to match.

`string` | `IOdrlAsset` | (`string` \| `IOdrlAsset`)[]

##### action?

The action to match.

`string` | `IOdrlAction` | (`string` \| `IOdrlAction`)[]

##### locator?

`Omit`\<[`IPolicyLocator`](../interfaces/IPolicyLocator.md), `"assignee"`\>

The locator to match resource id if provided.

#### Returns

`boolean`

True if the target and action match the requested asset type and action, false otherwise.

***

### matchLocator()

> `static` **matchLocator**(`assignee?`, `target?`, `action?`, `locator?`): `boolean`

Match the complete locator.

#### Parameters

##### assignee?

The assignee to match.

`string` | `IOdrlParty`

##### target?

The target to match.

`string` | `IOdrlAsset` | (`string` \| `IOdrlAsset`)[]

##### action?

The action to match.

`string` | `IOdrlAction` | (`string` \| `IOdrlAction`)[]

##### locator?

[`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The locator to match resource id if provided.

#### Returns

`boolean`

True if the complete locator matches, false otherwise.
