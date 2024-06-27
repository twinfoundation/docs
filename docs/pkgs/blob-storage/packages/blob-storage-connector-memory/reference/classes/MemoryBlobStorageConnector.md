# Class: MemoryBlobStorageConnector

Class for performing blob storage operations in-memory.

## Implements

- `IBlobStorageConnector`

## Constructors

### new MemoryBlobStorageConnector()

> **new MemoryBlobStorageConnector**(): [`MemoryBlobStorageConnector`](MemoryBlobStorageConnector.md)

Create a new instance of MemoryBlobStorageConnector.

#### Returns

[`MemoryBlobStorageConnector`](MemoryBlobStorageConnector.md)

## Methods

### set()

> **set**(`requestContext`, `blob`): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **blob**: `Uint8Array`

The data for the blob.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`requestContext`, `id`): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`requestContext`, `id`): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`

***

### getStore()

> **getStore**(`tenantId`): `undefined` \| `object`

Get the memory store for the specified tenant.

#### Parameters

• **tenantId**: `string`

The tenant id.

#### Returns

`undefined` \| `object`

The store.
