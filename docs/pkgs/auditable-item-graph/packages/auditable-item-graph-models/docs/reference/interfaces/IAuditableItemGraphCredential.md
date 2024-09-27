# Interface: IAuditableItemGraphCredential

The data stored immutably for the graph in a verifiable credential.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/aig/"` \| [`"https://schema.twindev.org/aig/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemGraphPatchCredential"`

JSON-LD Type.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The user identity that created the changes.

***

### signature

> **signature**: `string`

The signature for the changeset.

***

### hash

> **hash**: `string`

The signature for the changeset.

***

### integrity?

> `optional` **integrity**: `string`

The integrity data for this changeset, encrypted.
