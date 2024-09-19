# Class: AuditableItemGraphPatch

Class describing the auditable item graph patches.

## Constructors

### new AuditableItemGraphPatch()

> **new AuditableItemGraphPatch**(): [`AuditableItemGraphPatch`](AuditableItemGraphPatch.md)

#### Returns

[`AuditableItemGraphPatch`](AuditableItemGraphPatch.md)

## Properties

### op

> **op**: `"replace"` \| `"add"` \| `"remove"` \| `"copy"` \| `"move"` \| `"test"`

The operation for the patch.

***

### path

> **path**: `string`

The path for the patch.

***

### from?

> `optional` **from**: `string`

The from for the patch.

***

### value?

> `optional` **value**: `unknown`

The value for the patch.
