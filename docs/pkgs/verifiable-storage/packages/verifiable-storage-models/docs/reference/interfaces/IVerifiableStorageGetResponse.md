# Interface: IVerifiableStorageGetResponse

Response to getting the verifiable storage item.

## Properties

### body

> **body**: `object`

The data that was obtained.

#### receipt

> **receipt**: `IJsonLdNodeObject`

The receipt associated to the verifiable storage item.

#### data?

> `optional` **data**: `string`

The data of the verifiable storage item, this is a string serialized as base64.

#### allowList?

> `optional` **allowList**: `string`[]

The list of identities that are allowed to modify the item.
