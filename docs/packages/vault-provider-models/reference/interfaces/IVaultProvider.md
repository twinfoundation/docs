# Interface: IVaultProvider

Interface describing a vault securely storing data.

## Hierarchy

- `IService`

  ↳ **`IVaultProvider`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`ILogEntry`[]\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`ILogEntry`[]\>

The response of the bootstrapping as log entries.

#### Inherited from

IService.bootstrap

___

### get

▸ **get**\<`T`\>(`id`): `Promise`\<`T`\>

Get a secret from the vault.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the item in the vault to get. |

#### Returns

`Promise`\<`T`\>

The item from the vault.

**`Throws`**

Error if the item is not found.

___

### remove

▸ **remove**(`id`): `Promise`\<`void`\>

Remove a secret from the vault.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the item in the vault to remove. |

#### Returns

`Promise`\<`void`\>

Nothing.

**`Throws`**

Error if the item is not found.

___

### set

▸ **set**\<`T`\>(`id`, `item`): `Promise`\<`void`\>

Set a secret into the vault.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the item in the vault to set. |
| `item` | `T` | The item to add to the vault. |

#### Returns

`Promise`\<`void`\>

Nothing.

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
