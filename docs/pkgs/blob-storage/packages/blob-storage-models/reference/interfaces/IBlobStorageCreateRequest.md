# Interface: IBlobStorageCreateRequest

Request to create an entry in blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### blob

> **blob**: `string`

The data to store in base64 encoding.

#### mimeType?

> `optional` **mimeType**: `string`

The mime type of the blob, will be detected if left undefined.

#### extension?

> `optional` **extension**: `string`

The extension of the blob, will be detected if left undefined.

#### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Custom metadata to associate with the blob as JSON-LD.

#### namespace?

> `optional` **namespace**: `string`

The namespace to store the data in, defaults to component configured namespace.
