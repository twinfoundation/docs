# Interface: IAuditableItemGraphVerification

Interface describing an auditable item graph verification.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| [`"https://schema.twindev.org/aig/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphVerification"`

JSON-LD Type.

***

### dateCreated

> **dateCreated**: `string`

The date/time of the verification.

***

### state

> **state**: [`AuditableItemGraphVerificationState`](../type-aliases/AuditableItemGraphVerificationState.md)

The state of the verification.

***

### stateProperties?

> `optional` **stateProperties**: `object`

The state properties.

#### Index Signature

 \[`id`: `string`\]: `unknown`
