# Interface: IAuditableItemStreamEntryCredential

Interface describing the immutable credential for an entry in the stream.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/ais/"` \| [`"https://schema.twindev.org/ais/"`, `...string[]`]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStreamEntryCredential"`

JSON-LD Type.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the stream was created.

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
