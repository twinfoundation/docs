# Interface: IBlobStorageUpdateRequest

Request to update a blob entry.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the blob to get in urn format.

***

### body

> **body**: `object`

The body parameters.

#### mimeType?

> `optional` **mimeType**: `string`

The mime type of the blob, will be detected if left undefined.

#### extension?

> `optional` **extension**: `string`

The extension of the blob, will be detected if left undefined.

#### metadata?

> `optional` **metadata**: `unknown`

Custom metadata to associate with the blob as JSON-LD.
