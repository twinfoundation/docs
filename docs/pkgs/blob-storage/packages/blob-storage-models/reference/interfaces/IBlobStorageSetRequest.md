# Interface: IBlobStorageSetRequest

Request to set an entry in blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### blob

> **blob**: `string`

The data to store in base64 encoding.

#### namespace?

> `optional` **namespace**: `string`

The namespace to store the data in, defaults to service configured namespace.
