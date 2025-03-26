# Interface: IDataProcessingRuleGroupSetRequest

Set a rule group.

## Properties

### pathParams

> **pathParams**: `object`

The parameters to be used in the set.

#### id

> **id**: `string`

The rule id to set.

***

### body

> **body**: `object`

The data to be used in the store.

#### label

> **label**: `string`

The label for the rule group.

#### rules

> **rules**: [`IRule`](IRule.md)[]

The rules.
