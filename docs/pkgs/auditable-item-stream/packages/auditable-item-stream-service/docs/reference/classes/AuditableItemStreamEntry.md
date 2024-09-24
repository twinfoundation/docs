# Class: AuditableItemStreamEntry

Class describing the auditable item stream entry.

## Constructors

### new AuditableItemStreamEntry()

> **new AuditableItemStreamEntry**(): [`AuditableItemStreamEntry`](AuditableItemStreamEntry.md)

#### Returns

[`AuditableItemStreamEntry`](AuditableItemStreamEntry.md)

## Properties

### id

> **id**: `string`

The id of the entry.

***

### streamId

> **streamId**: `string`

The stream that the entry belongs to.

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

The identity of the user that added the entry.

***

### entryObject

> **entryObject**: `IJsonLdNodeObject`

Object to associate with the entry as JSON-LD.

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

The immutable storage id.
