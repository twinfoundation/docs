# Interface: IBlobStorageCreateRequest

Request to create an entry in blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### blob

> **blob**: `string`

The data to store in base64 encoding.

#### metadata?

> `optional` **metadata**: `IProperty`[]

Metadata to associate with the blob.

#### namespace?

> `optional` **namespace**: `string`

The namespace to store the data in, defaults to component configured namespace.
