# Interface: IAuditableItemStream

Interface describing an auditable item stream.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStream"`

JSON-LD Type.

***

### id

> **id**: `string`

The id of the stream.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the stream was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the stream was modified.

***

### nodeIdentity

> **nodeIdentity**: `string`

The identity of the node which controls the stream.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user who created the stream.

***

### streamObject?

> `optional` **streamObject**: `IJsonLdNodeObject`

The object to associate with the entry as JSON-LD.

***

### hash

> **hash**: `string`

The hash of the stream.

***

### signature

> **signature**: `string`

The signature of the stream.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id.

***

### immutableInterval

> **immutableInterval**: `number`

After how many entries do we add immutable checks.

***

### entries?

> `optional` **entries**: [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)[]

Entries in the stream.

***

### cursor?

> `optional` **cursor**: `string`

The cursor for the stream entries.

***

### streamVerification?

> `optional` **streamVerification**: [`IAuditableItemStreamVerification`](IAuditableItemStreamVerification.md)

The verification of the stream.
