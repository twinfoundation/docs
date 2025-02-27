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

The identity of the user which created the stream.

***

### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

Object to associate with the stream as JSON-LD.

***

### indexCounter

> **indexCounter**: `number`

The counter for the entry index.

***

### immutableInterval

> **immutableInterval**: `number`

After how many entries do we add immutable checks.

***

### proofId?

> `optional` **proofId**: `string`

The immutable proof id.
