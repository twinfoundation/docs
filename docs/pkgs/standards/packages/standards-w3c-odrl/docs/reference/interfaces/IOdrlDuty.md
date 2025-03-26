# Interface: IOdrlDuty

Interface for Duty Rules.
A Duty is the obligation to exercise an action, with all refinements satisfied.
A Duty is fulfilled if all constraints are satisfied and if its action has been exercised.

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdIdMap` \| `IJsonLdNodeObject` \| `IJsonLdListObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdSetObject` \| `IJsonLdJsonObject` \| `IJsonLdIndexMap` \| `IJsonLdLanguageMap` \| `IJsonLdGraphObject` \| `IJsonLdNodeObject`[] \| `IJsonLdJsonObject`[] \| \{\} \| `IJsonLdTypeMap` \| `IJsonLdNodePrimitive`[]

## Properties

### attributedParty?

> `optional` **attributedParty**: `string`

The party to be attributed
Used when the duty involves attribution

***

### trackingParty?

> `optional` **trackingParty**: `string`

The party performing the tracking
Used when the duty involves tracking

***

### consequence?

> `optional` **consequence**: [`IOdrlDuty`](IOdrlDuty.md)[]

The consequences if the duty is not fulfilled.
Only applicable when the Duty is referenced by a Rule with duty or obligation
properties.

***

### remedy?

> `optional` **remedy**: [`IOdrlDuty`](IOdrlDuty.md)[]

The remedies that may be fulfilled to cure the violation.

***

### compensatedParty?

> `optional` **compensatedParty**: `string`

The party to be compensated
Used when the duty involves compensation

***

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action?

> `optional` **action**: [`ActionType`](../type-aliases/ActionType.md) \| [`IOdrlAction`](IOdrlAction.md) \| ActionType \| IOdrlAction[]

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
