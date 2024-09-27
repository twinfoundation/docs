# Interface: IAuditableItemStreamCredential

Interface describing the immutable credential for a stream.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamCredential"`

JSON-LD Type.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the stream was created.

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
