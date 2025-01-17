# Interface: IAuditableItemGraphPatchOperation

The patch operation for JSON diffs.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| \[`"https://schema.twindev.org/aig/"`, `...string[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphPatchOperation"`

JSON-LD Type.

***

### patchOperation

> **patchOperation**: `"replace"` \| `"add"` \| `"remove"` \| `"copy"` \| `"move"` \| `"test"`

The operation that was performed on the item.

***

### patchPath

> **patchPath**: `string`

The path to the object that was changed.

***

### patchFrom?

> `optional` **patchFrom**: `string`

The path the value was copied or moved from.

***

### patchValue?

> `optional` **patchValue**: `unknown`

The value to add.
