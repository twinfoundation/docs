# Interface: IAuditableItemStream

Interface describing an auditable item stream.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/ais/"`, `"https://schema.twindev.org/common/"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"AuditableItemStream"`

JSON-LD Type.

***

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

### organizationIdentity?

> `optional` **organizationIdentity**: `string`

The identity of the organization which controls the stream.

***

### userIdentity?

> `optional` **userIdentity**: `string`

The identity of the user who created the stream.

***

### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

The object to associate with the entry as JSON-LD.

***

### proofId?

> `optional` **proofId**: `string`

The id of the immutable proof for the stream.

***

### immutableInterval

> **immutableInterval**: `number`

After how many entries do we add immutable checks.

***

### entries?

> `optional` **entries**: [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)[]

Entries in the stream.

***

### cursor?

> `optional` **cursor**: `string`

The cursor for the stream entries.

***

### verification?

> `optional` **verification**: `IImmutableProofVerification`

The verification of the stream.
