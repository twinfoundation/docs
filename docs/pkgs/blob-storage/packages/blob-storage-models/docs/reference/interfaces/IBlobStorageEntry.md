# Interface: IBlobStorageEntry

Interface describing a blob storage entry.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/blob-storage/"` \| \[`"https://schema.twindev.org/blob-storage/"`, `...string[]`\]

JSON-LD Context.

***

### type

> **type**: `"BlobStorageEntry"`

JSON-LD Type.

***

### id

> **id**: `string`

The id for the blob.

***

### dateCreated

> **dateCreated**: `string`

The date/time when the entry was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time when the entry was modified.

***

### blobSize

> **blobSize**: `number`

The size of the data in the blob.

***

### encodingFormat?

> `optional` **encodingFormat**: `string`

The mime type for the blob.

***

### fileExtension?

> `optional` **fileExtension**: `string`

The extension.

***

### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

The metadata for the blob as JSON-LD.

***

### blob?

> `optional` **blob**: `string`

The blob in base64 format, if the includeContent flag was set in the request.
