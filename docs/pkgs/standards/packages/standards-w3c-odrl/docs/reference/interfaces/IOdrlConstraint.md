# Interface: IOdrlConstraint

Interface for ODRL Constraints.

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinition` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{[`key`: `string`]: `string`; \}

## Properties

### uid?

> `optional` **uid**: `string`

Optional unique identifier for the constraint.

***

### leftOperand

> **leftOperand**: `string`

The left operand of the constraint.

***

### operator

> **operator**: [`OperatorType`](../type-aliases/OperatorType.md)

The operator of the constraint.

***

### rightOperand?

> `optional` **rightOperand**: `string` \| \{ `@value`: `string`; `@type?`: `string`; \} \| \{ `@id`: `string`; \}

The right operand of the constraint.
value with optional

***

### rightOperandReference?

> `optional` **rightOperandReference**: `string`

Reference to the right operand.

***

### dataType?

> `optional` **dataType**: `string`

The data type of the right operand.

***

### unit?

> `optional` **unit**: `string`

The unit for the right operand value.

***

### status?

> `optional` **status**: [`StatusType`](../type-aliases/StatusType.md)

The status value for comparison.
