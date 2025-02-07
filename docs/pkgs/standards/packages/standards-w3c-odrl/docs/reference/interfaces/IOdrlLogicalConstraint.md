# Interface: IOdrlLogicalConstraint

Interface for ODRL Logical Constraints.
A Logical Constraint compares two or more existing Constraints by one logical operator.
If the comparison returns a logical match, then the Logical Constraint is satisfied.

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdNodeObject`[] \| `IJsonLdGraphObject` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\}

## Properties

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the logical constraint.
Must be an IRI.

***

### and?

> `optional` **and**: `object`

AND operator - all constraints must be satisfied.

#### @list

> **@list**: `object`[]

***

### or?

> `optional` **or**: `object`

OR operator - at least one constraint must be satisfied.

#### @list

> **@list**: `object`[]

***

### xone?

> `optional` **xone**: `object`

XOR operator - exactly one constraint must be satisfied.

#### @list

> **@list**: `object`[]

***

### andSequence?

> `optional` **andSequence**: `object`

AND Sequence operator - all constraints must be satisfied in order.

#### @list

> **@list**: `object`[]
