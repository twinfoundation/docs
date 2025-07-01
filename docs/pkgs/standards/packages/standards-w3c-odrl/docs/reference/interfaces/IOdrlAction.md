# Interface: IOdrlAction

Interface for ODRL Actions.

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### rdf:value?

> `optional` **rdf:value**: `object`

The value/identifier of the action.
Used in complex action definitions.

#### @id

> **@id**: `string`

***

### @id?

> `optional` **@id**: `string`

Direct action identifier.
Used in simple action references.

#### Overrides

`IJsonLdNodeObject.@id`

***

### refinement?

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md) \| ([`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md))[]

Refinements applied to the action.

***

### includedIn?

> `optional` **includedIn**: [`ActionType`](../type-aliases/ActionType.md)

Reference to the action this action is included in.

***

### implies?

> `optional` **implies**: [`ActionType`](../type-aliases/ActionType.md)[]

References to actions this action implies.
