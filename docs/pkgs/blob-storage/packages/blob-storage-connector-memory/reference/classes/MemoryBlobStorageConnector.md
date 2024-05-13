# Class: MemoryBlobStorageConnector

Class for performing blob storage operations in-memory.

## Implements

- `IBlobStorageConnector`

## Constructors

### constructor

• **new MemoryBlobStorageConnector**(`config?`): [`MemoryBlobStorageConnector`](MemoryBlobStorageConnector.md)

Create a new instance of MemoryBlobStorageConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`IMemoryBlobStorageConnectorConfig`](../interfaces/IMemoryBlobStorageConnectorConfig.md) | The configuration for the blob storage connector. |

#### Returns

[`MemoryBlobStorageConnector`](MemoryBlobStorageConnector.md)

## Methods

### get

▸ **get**(`requestContext`, `id`): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `id` | `string` | The id of the blob to get. |

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

IBlobStorageConnector.get

___

### getStore

▸ **getStore**(`tenantId`): `undefined` \| \{ `[id: string]`: `Uint8Array`;  }

Get the memory store for the specified tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | The tenant id. |

#### Returns

`undefined` \| \{ `[id: string]`: `Uint8Array`;  }

The store.

___

### remove

▸ **remove**(`requestContext`, `id`): `Promise`\<`void`\>

Remove the blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `id` | `string` | The id of the blob to remove. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

IBlobStorageConnector.remove

___

### set

▸ **set**(`requestContext`, `blob`): `Promise`\<`string`\>

Set the blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `blob` | `Uint8Array` | The data for the blob. |

#### Returns

`Promise`\<`string`\>

The id of the stored blob.

#### Implementation of

IBlobStorageConnector.set
