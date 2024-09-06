# Interface: IBlobStorageGetResponse

Response to get an entry from blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### mimeType?

> `optional` **mimeType**: `string`

The mime type of the blob.

#### extension?

> `optional` **extension**: `string`

The extension of the blob.

#### metadata?

> `optional` **metadata**: `unknown`

Custom metadata to associate with the blob as JSON-LD.

#### blob?

> `optional` **blob**: `string`

The blob in base64 format, if the includeContent flag was set in the request.
