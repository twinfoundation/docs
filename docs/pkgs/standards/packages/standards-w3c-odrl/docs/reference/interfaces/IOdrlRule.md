# Interface: IOdrlRule

Base interface for ODRL Rules.

## Extends

- `IJsonLdNodeObject`

## Extended by

- [`IOdrlDuty`](IOdrlDuty.md)
- [`IOdrlPermission`](IOdrlPermission.md)
- [`IOdrlProhibition`](IOdrlProhibition.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

***

### action?

> `optional` **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

The action associated with the rule.

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the rule.

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the rule.

***

### constraint?

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Constraints applied to the rule.

***

### summary?

> `optional` **summary**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.
