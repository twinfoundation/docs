# Interface: IImmutableStorageStoreRequest

Store the data and return the Immutable Storage id.

## Properties

### body

> **body**: `object`

The data to be stored.

#### data

> **data**: `string`

The data for the Immutable Storage, this is a string serialized as base64.

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the Immutable Storage, defaults to component configured namespace.
