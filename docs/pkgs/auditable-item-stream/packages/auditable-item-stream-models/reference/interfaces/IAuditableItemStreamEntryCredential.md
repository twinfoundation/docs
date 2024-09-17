# Interface: IAuditableItemStreamEntryCredential

Interface describing the immutable credential for an entry in the stream.

## Properties

### created

> **created**: `number`

The timestamp of when the entry was created.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user which added the entry to the stream.

***

### hash

> **hash**: `string`

The hash of the entry.

***

### signature

> **signature**: `string`

The signature of the entry.

***

### index

> **index**: `number`

The index of the entry in the stream.
