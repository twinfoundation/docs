# Interface: IAuditableItemStreamVerification

Interface describing an auditable item stream verification.

## Indexable

 \[`id`: `string`\]: `unknown`

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamVerification"`

JSON-LD Type.

***

### id?

> `optional` **id**: `string`

The id, only used if the verification if for an entry.

***

### state

> **state**: [`AuditableItemStreamVerificationState`](../type-aliases/AuditableItemStreamVerificationState.md)

The state of the verification.
