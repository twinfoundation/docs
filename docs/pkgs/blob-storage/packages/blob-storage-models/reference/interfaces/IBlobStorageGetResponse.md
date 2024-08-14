# Interface: IBlobStorageGetResponse

Response to get an entry from blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### metadata

> **metadata**: `IProperty`[]

Metadata associated with the blob.

#### blob?

> `optional` **blob**: `string`

The blob in base64 format, if the includeContent flag was set in the request.
