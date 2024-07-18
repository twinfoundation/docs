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

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorageConnector.CLASS_NAME`

## Methods

### set()

> **set**(`blob`, `requestContext`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`id`, `requestContext`?): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`id`, `requestContext`?): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`

***

### getStore()

> **getStore**(`partitionId`): `undefined` \| `object`

Get the memory store for the specified partition.

#### Parameters

• **partitionId**: `string`

The partition id.

#### Returns

`undefined` \| `object`

The store.
