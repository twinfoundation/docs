# Class: AuditableItemStream

Class describing the auditable item stream.

## Constructors

### new AuditableItemStream()

> **new AuditableItemStream**(): [`AuditableItemStream`](AuditableItemStream.md)

#### Returns

[`AuditableItemStream`](AuditableItemStream.md)

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

The timestamp of when the stream was last updated.

***

### nodeIdentity

> **nodeIdentity**: `string`

The identity of the node which controls the stream.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user which created the stream.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Metadata to associate with the stream as JSON-LD.

***

### indexCounter

> **indexCounter**: `number`

The counter for the entry index.

***

### immutableInterval

> **immutableInterval**: `number`

After how many entries do we add immutable checks.

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

The immutable storage id.
