# Interface: IOdrlProhibition

Interface for Prohibition Rules.
https://www.w3.org/TR/odrl-model/#prohibition

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### remedy?

> `optional` **remedy**: [`IOdrlDuty`](IOdrlDuty.md)[]

The remedies that must be fulfilled if prohibition is violated.

***

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action?

> `optional` **action**: `string` \| [`IOdrlAction`](IOdrlAction.md) \| (`string` \| [`IOdrlAction`](IOdrlAction.md))[]

The action associated with the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`action`](IOdrlRule.md#action)

***

### target?

> `optional` **target**: `string` \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`target`](IOdrlRule.md#target)

***

### assigner?

> `optional` **assigner**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assigner of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assigner`](IOdrlRule.md#assigner)

***

### assignee?

> `optional` **assignee**: `string` \| [`IOdrlParty`](IOdrlParty.md)

The assignee of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assignee`](IOdrlRule.md#assignee)

***

### constraint?

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md)[]

Constraints applied to the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`constraint`](IOdrlRule.md#constraint)

***

### summary?

> `optional` **summary**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`summary`](IOdrlRule.md#summary)
