# Class: FileEntityStorageConnector\<T\>

Class for performing entity storage operations in file.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### constructor

• **new FileEntityStorageConnector**\<`T`\>(`dependencies`, `entityDescriptor`, `config`): [`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

Create a new instance of FileEntityStorageConnector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The dependencies for the connector. |
| `dependencies.loggingContract` | `ILoggingContract` | The logging contract. |
| `entityDescriptor` | `IEntityDescriptor`\<`T`\> | The descriptor for the entity. |
| `config` | [`IFileEntityStorageConnectorConfig`](../interfaces/IFileEntityStorageConnectorConfig.md) | The configuration for the entity storage connector. |

#### Returns

[`FileEntityStorageConnector`](FileEntityStorageConnector.md)\<`T`\>

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

IEntityStorageConnector.bootstrap

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

IEntityStorageConnector.get

___

### query

▸ **query**(`requestContext`, `conditions?`, `sortProperties?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`T`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Find all the entities which match the conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `conditions?` | `EntityCondition`\<`T`\> | The conditions to match for the entities. |
| `sortProperties?` | \{ `property`: keyof `T` ; `sortDirection`: `SortDirection`  }[] | The optional sort order. |
| `properties?` | keyof `T`[] | The optional properties to return, defaults to all. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`T`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

IEntityStorageConnector.query

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

IEntityStorageConnector.remove

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

IEntityStorageConnector.set

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
