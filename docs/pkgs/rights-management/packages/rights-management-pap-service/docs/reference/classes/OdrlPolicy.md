# Class: OdrlPolicy

Class describing an ODRL policy for entity storage.

## Constructors

### Constructor

> **new OdrlPolicy**(): `OdrlPolicy`

#### Returns

`OdrlPolicy`

## Properties

### uid

> **uid**: `string`

The unique identifier for the policy.

***

### @type

> **@type**: `PolicyType`

The type of policy.

***

### profile?

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.

***

### assigner?

> `optional` **assigner**: `string` \| `IOdrlParty`

The assigner of the policy.

***

### assignee?

> `optional` **assignee**: `string` \| `IOdrlParty`

The assignee of the policy.

***

### target?

> `optional` **target**: `string` \| `IOdrlAsset` \| (`string` \| `IOdrlAsset`)[]

The target asset for the rule.

***

### action?

> `optional` **action**: `ActionType` \| `IOdrlAction` \| ActionType \| IOdrlAction[]

The action associated with the rule.

***

### conflict?

> `optional` **conflict**: `ConflictStrategyType`

The conflict resolution strategy.

***

### permission?

> `optional` **permission**: `IOdrlPermission`[]

The permissions in the policy.

***

### prohibition?

> `optional` **prohibition**: `IOdrlProhibition`[]

The prohibitions in the policy.

***

### obligation?

> `optional` **obligation**: `IOdrlDuty`[]

The obligations in the policy.
