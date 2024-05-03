# Class: FileEntityStorageProvider\<T\>

Class for performing entity storage operations in file.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implements

- `IEntityStorageProvider`\<`T`\>

## Constructors

### constructor

• **new FileEntityStorageProvider**\<`T`\>(`dependencies`, `entityDescriptor`, `config`): [`FileEntityStorageProvider`](FileEntityStorageProvider.md)\<`T`\>

Create a new instance of FileEntityStorageProvider.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The dependencies for the service. |
| `dependencies.loggingProvider` | `ILoggingProvider` | The logging provider. |
| `entityDescriptor` | `IEntityDescriptor`\<`T`\> | The descriptor for the entity. |
| `config` | [`IFileEntityStorageProviderConfig`](../interfaces/IFileEntityStorageProviderConfig.md) | The configuration for the entity storage provider. |

#### Returns

[`FileEntityStorageProvider`](FileEntityStorageProvider.md)\<`T`\>

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

The response of the bootstrapping as log entries.

#### Implementation of

IEntityStorageProvider.bootstrap

___

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

### readTenantStore

▸ **readTenantStore**(`tenantId`): `Promise`\<`T`[]\>

Read the store from file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | The tenant id to read the store for. |

#### Returns

`Promise`\<`T`[]\>

The store for the tenant.

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

___

### writeTenantStore

▸ **writeTenantStore**(`tenantId`, `store`): `Promise`\<`void`\>

Write the store to the file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | The tenant id to read the store for. |
| `store` | `T`[] | The store to write. |

#### Returns

`Promise`\<`void`\>

Nothing.
