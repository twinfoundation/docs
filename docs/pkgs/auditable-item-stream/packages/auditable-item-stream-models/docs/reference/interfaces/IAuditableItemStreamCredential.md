# Interface: IAuditableItemStreamCredential

Interface describing the immutable credential for a stream.

## Properties

### created

> **created**: `number`

The timestamp of when the stream was created.

***

### userIdentity

> **userIdentity**: `string`

The identity of the user which added the stream.

***

### hash

> **hash**: `string`

The hash of the stream.

***

### signature

> **signature**: `string`

The signature of the stream.
