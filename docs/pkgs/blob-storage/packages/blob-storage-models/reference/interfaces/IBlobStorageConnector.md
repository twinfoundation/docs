# Interface: IBlobStorageConnector

Interface describing an blob storage connector.

## Hierarchy

- `IService`

  ↳ **`IBlobStorageConnector`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

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

___

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

___

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop
