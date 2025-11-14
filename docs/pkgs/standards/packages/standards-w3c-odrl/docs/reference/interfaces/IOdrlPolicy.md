# Interface: IOdrlPolicy

Interface representing an ODRL Policy.
https://www.w3.org/TR/odrl-model/#policy

## Extends

- `IJsonLdNodeObject`

## Extended by

- [`IOdrlAgreement`](IOdrlAgreement.md)
- [`IOdrlOffer`](IOdrlOffer.md)
- [`IOdrlSet`](IOdrlSet.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`OdrlContextType`](../type-aliases/OdrlContextType.md)

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Overrides

`IJsonLdNodeObject.@context`

***

### @type

> **@type**: [`PolicyType`](../type-aliases/PolicyType.md)

The type of policy.
Must be one of: "Set", "Offer", "Agreement"

#### Overrides

`IJsonLdNodeObject.@type`

***

### uid

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

***

### profile?

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the policy.
Applies to all rules unless overridden at rule level.

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the policy.
Applies to all rules unless overridden at rule level.

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

***

### action?

> `optional` **action**: `string` \| [`IOdrlAction`](IOdrlAction.md) \| (`string` \| [`IOdrlAction`](IOdrlAction.md))[]

The action associated with the rule.

***

### inheritFrom?

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

***

### conflict?

> `optional` **conflict**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

***

### permission?

> `optional` **permission**: [`IOdrlPermission`](IOdrlPermission.md)[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### prohibition?

> `optional` **prohibition**: [`IOdrlProhibition`](IOdrlProhibition.md)[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### obligation?

> `optional` **obligation**: [`IOdrlDuty`](IOdrlDuty.md)[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.
