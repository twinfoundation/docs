# Class: MemoryVaultProvider

Class for performing vault operations in memory.

## Implements

- `IVaultProvider`

## Constructors

### constructor

• **new MemoryVaultProvider**(): [`MemoryVaultProvider`](MemoryVaultProvider.md)

Create a new instance of MemoryVaultProvider.

#### Returns

[`MemoryVaultProvider`](MemoryVaultProvider.md)

## Methods

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

#### Implementation of

IVaultProvider.get

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

#### Implementation of

IVaultProvider.remove

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

#### Implementation of

IVaultProvider.set
