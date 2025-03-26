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

### userIdentity

> **userIdentity**: `string`

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

### proofId?

> `optional` **proofId**: `string`

The immutable proof id.
