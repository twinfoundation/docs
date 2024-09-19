# Interface: IAuditableItemStreamEntry

Interface describing an entry for the stream.

## Properties

### id

> **id**: `string`

The id of the entry.

***

### created

> **created**: `number`

The timestamp of when the entry was created.

***

### updated?

> `optional` **updated**: `number`

The timestamp of when the entry was updated.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the entry was deleted, as we never actually remove items.

***

### userIdentity?

> `optional` **userIdentity**: `string`

The identity of the user which added the entry to the stream.

***

### object

> **object**: `IJsonLdNodeObject`

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
