# Interface: IAuditableItemStreamEntry

Interface describing an entry for the stream.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamEntry"`

JSON-LD Type.

***

### id

> **id**: `string`

The id of the entry.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the entry was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the entry was modified.

***

### dateDeleted?

> `optional` **dateDeleted**: `string`

The date/time of when the entry was deleted, as we never actually remove items.

***

### userIdentity?

> `optional` **userIdentity**: `string`

The identity of the user which added the entry to the stream.

***

### entryObject

> **entryObject**: `IJsonLdNodeObject`

The object to associate with the entry as JSON-LD.

***

### index

> **index**: `number`

The index of the entry in the stream.

***

### hash

> **hash**: `string`

The hash of the entry.

***

### signature

> **signature**: `string`

The signature of the entry.

***

### immutableStorageId?

> `optional` **immutableStorageId**: `string`

The immutable storage id containing the signature for the entry.

***

### entryVerification?

> `optional` **entryVerification**: [`IAuditableItemStreamVerification`](IAuditableItemStreamVerification.md)

The verification of the entry.
