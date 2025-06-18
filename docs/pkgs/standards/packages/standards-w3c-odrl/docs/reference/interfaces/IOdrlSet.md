# Interface: IOdrlSet

Interface representing an ODRL Set.
A Set is a basic policy type with no specific party requirements.

## Extends

- [`IOdrlPolicy`](IOdrlPolicy.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### @context

> **@context**: [`OdrlContextType`](../type-aliases/OdrlContextType.md)

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`@context`](IOdrlPolicy.md#context)

***

### uid

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`uid`](IOdrlPolicy.md#uid)

***

### profile?

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`profile`](IOdrlPolicy.md#profile)

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`assigner`](IOdrlPolicy.md#assigner)

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`assignee`](IOdrlPolicy.md#assignee)

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`target`](IOdrlPolicy.md#target)

***

### action?

> `optional` **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

The action associated with the rule.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`action`](IOdrlPolicy.md#action)

***

### inheritFrom?

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`inheritFrom`](IOdrlPolicy.md#inheritfrom)

***

### conflict?

> `optional` **conflict**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`conflict`](IOdrlPolicy.md#conflict)

***

### permission?

> `optional` **permission**: [`IOdrlPermission`](IOdrlPermission.md)[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`permission`](IOdrlPolicy.md#permission)

***

### prohibition?

> `optional` **prohibition**: [`IOdrlProhibition`](IOdrlProhibition.md)[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`prohibition`](IOdrlPolicy.md#prohibition)

***

### obligation?

> `optional` **obligation**: [`IOdrlDuty`](IOdrlDuty.md)[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`obligation`](IOdrlPolicy.md#obligation)

***

### @type

> **@type**: `"Set"`

The type must be "Set".

#### Overrides

[`IOdrlPolicy`](IOdrlPolicy.md).[`@type`](IOdrlPolicy.md#type)
