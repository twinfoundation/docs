# Class: AuditableItemGraphPatch

Class describing the auditable item graph patches.

## Constructors

### Constructor

> **new AuditableItemGraphPatch**(): `AuditableItemGraphPatch`

#### Returns

`AuditableItemGraphPatch`

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
