# Interface: IAuditableItemStream

Interface describing an auditable item stream.

## Properties

### id

> **id**: `string`

The id of the stream.

***

### created

> **created**: `number`

The timestamp of when the stream was created.

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the stream was updated.

***

### nodeIdentity

> **nodeIdentity**: `string`

The identity of the node which controls the stream.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user who created the stream.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

The metadata to associate with the entry as JSON-LD.

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

### entries?

> `optional` **entries**: [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)[]

Entries in the stream.

***

### immutableInterval

> **immutableInterval**: `number`

After how many entries do we add immutable checks.
