# Class: MemoryEntityStorageProvider\<T\>

Class for performing entity storage operations in-memory.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implements

- `IEntityStorageProvider`\<`T`\>

## Constructors

### constructor

• **new MemoryEntityStorageProvider**\<`T`\>(`entityDescriptor`, `config?`): [`MemoryEntityStorageProvider`](MemoryEntityStorageProvider.md)\<`T`\>

Create a new instance of MemoryEntityStorageProvider.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityDescriptor` | `IEntityDescriptor`\<`T`\> | The descriptor for the entity. |
| `config?` | [`IMemoryEntityStorageProviderConfig`](../interfaces/IMemoryEntityStorageProviderConfig.md)\<`T`\> | The configuration for the entity storage provider. |

#### Returns

[`MemoryEntityStorageProvider`](MemoryEntityStorageProvider.md)\<`T`\>

## Methods

### find

▸ **find**(`requestContext`, `conditions?`, `sortKeys?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `T`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Find all the entities which match the conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `conditions?` | `Condition`\<`T`\> | The conditions to match for the entities. |
| `sortKeys?` | \{ `name`: keyof `T` ; `sortDirection`: `SortDirection`  }[] | The optional sort order. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `T`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

IEntityStorageProvider.find

___

### get

▸ **get**(`requestContext`, `id`, `secondaryIndex?`): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `id` | `string` | The id of the entity to get, or the index value if secondaryIndex is set. |
| `secondaryIndex?` | keyof `T` | Get the item using a secondary index. |

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

IEntityStorageProvider.get

___

### getStore

▸ **getStore**(`tenantId`): `undefined` \| `T`[]

Get the memory store for the specified tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | The tenant id. |

#### Returns

`undefined` \| `T`[]

The store.

___

### remove

▸ **remove**(`requestContext`, `id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `id` | `string` | The id of the entity to remove. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

IEntityStorageProvider.remove

___

### set

▸ **set**(`requestContext`, `entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `entity` | `T` | The entity to set. |

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

IEntityStorageProvider.set
