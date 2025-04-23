# Interface: IVerifiableStorageCreateRequest

Store the data and return the Verifiable Storage id.

## Properties

### body

> **body**: `object`

The data to be stored.

#### data

> **data**: `string`

The data for the Verifiable Storage, this is a string serialized as base64.

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the Verifiable Storage, defaults to component configured namespace.
