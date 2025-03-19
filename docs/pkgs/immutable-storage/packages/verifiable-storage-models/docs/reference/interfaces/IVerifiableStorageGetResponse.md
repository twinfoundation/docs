# Interface: IVerifiableStorageGetResponse

Response to getting the Verifiable Storage.

## Properties

### body

> **body**: `object`

The data that was obtained.

#### receipt

> **receipt**: `IJsonLdNodeObject`

The receipt associated to the Verifiable Storage.

#### data?

> `optional` **data**: `string`

The data of the Verifiable Storage, this is a string serialized as base64.
