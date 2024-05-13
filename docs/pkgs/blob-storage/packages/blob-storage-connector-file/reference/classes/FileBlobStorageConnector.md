# Class: FileBlobStorageConnector

Class for performing blob storage operations in file.

## Implements

- `IBlobStorageConnector`

## Constructors

### constructor

• **new FileBlobStorageConnector**(`dependencies`, `config`): [`FileBlobStorageConnector`](FileBlobStorageConnector.md)

Create a new instance of FileBlobStorageConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The dependencies for the connector. |
| `dependencies.logging` | `ILogging` | The logging contract. |
| `config` | [`IFileBlobStorageConnectorConfig`](../interfaces/IFileBlobStorageConnectorConfig.md) | The configuration for the blob storage connector. |

#### Returns

[`FileBlobStorageConnector`](FileBlobStorageConnector.md)

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the connector by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

The response of the bootstrapping as log entries.

#### Implementation of

IBlobStorageConnector.bootstrap

___

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
