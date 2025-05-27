# Interface: IVerifiableStorageUpdateRequest

Update the data and return the receipt.

## Properties

### pathParams

> **pathParams**: `object`

The data to be updated.

#### id

> **id**: `string`

The id of the verifiable storage item to update.

***

### body

> **body**: `object`

The data to be updated.

#### data?

> `optional` **data**: `string`

The data which is a string serialized as base64, leave empty if just updating the allowlist.

#### allowList?

> `optional` **allowList**: `string`[]

An updated list of identities that are allowed to modify the item, send an empty list to remove all entries.
