# Class: MemoryEntityStorageConnector\<T\>

Class for performing entity storage operations in-memory.

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

## Implements

- `IEntityStorageConnector`\<`T`\>

## Constructors

### constructor

• **new MemoryEntityStorageConnector**\<`T`\>(`entityDescriptor`, `config?`): [`MemoryEntityStorageConnector`](MemoryEntityStorageConnector.md)\<`T`\>

Create a new instance of MemoryEntityStorageConnector.

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name               | Type                                                                                                 | Description                                         |
| :----------------- | :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `entityDescriptor` | `IEntityDescriptor`\<`T`\>                                                                           | The descriptor for the entity.                      |
| `config?`          | [`IMemoryEntityStorageConnectorConfig`](../interfaces/IMemoryEntityStorageConnectorConfig.md)\<`T`\> | The configuration for the entity storage connector. |

#### Returns

[`MemoryEntityStorageConnector`](MemoryEntityStorageConnector.md)\<`T`\>

## Methods

### get

▸ **get**(`requestContext`, `id`, `secondaryIndex?`): `Promise`\<`undefined` \| `T`\>

Get an entity.

#### Parameters

| Name              | Type              | Description                                                               |
| :---------------- | :---------------- | :------------------------------------------------------------------------ |
| `requestContext`  | `IRequestContext` | The context for the request.                                              |
| `id`              | `string`          | The id of the entity to get, or the index value if secondaryIndex is set. |
| `secondaryIndex?` | keyof `T`         | Get the item using a secondary index.                                     |

#### Returns

`Promise`\<`undefined` \| `T`\>

The object if it can be found or undefined.

#### Implementation of

IEntityStorageConnector.get

---

### getStore

▸ **getStore**(`tenantId`): `undefined` \| `T`[]

Get the memory store for the specified tenant.

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `tenantId` | `string` | The tenant id. |

#### Returns

`undefined` \| `T`[]

The store.

---

### query

▸ **query**(`requestContext`, `conditions?`, `sortProperties?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`T`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number` }\>

Find all the entities which match the conditions.

#### Parameters

| Name              | Type                                                            | Description                                         |
| :---------------- | :-------------------------------------------------------------- | :-------------------------------------------------- |
| `requestContext`  | `IRequestContext`                                               | The context for the request.                        |
| `conditions?`     | `EntityCondition`\<`T`\>                                        | The conditions to match for the entities.           |
| `sortProperties?` | \{ `property`: keyof `T` ; `sortDirection`: `SortDirection` }[] | The optional sort order.                            |
| `properties?`     | keyof `T`[]                                                     | The optional properties to return, defaults to all. |
| `cursor?`         | `string`                                                        | The cursor to request the next page of entities.    |
| `pageSize?`       | `number`                                                        | The maximum number of entities in a page.           |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`T`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number` }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

IEntityStorageConnector.query

---

### remove

▸ **remove**(`requestContext`, `id`): `Promise`\<`void`\>

Remove the entity.

#### Parameters

| Name             | Type              | Description                     |
| :--------------- | :---------------- | :------------------------------ |
| `requestContext` | `IRequestContext` | The context for the request.    |
| `id`             | `string`          | The id of the entity to remove. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

IEntityStorageConnector.remove

---

### set

▸ **set**(`requestContext`, `entity`): `Promise`\<`void`\>

Set an entity.

#### Parameters

| Name             | Type              | Description                  |
| :--------------- | :---------------- | :--------------------------- |
| `requestContext` | `IRequestContext` | The context for the request. |
| `entity`         | `T`               | The entity to set.           |

#### Returns

`Promise`\<`void`\>

The id of the entity.

#### Implementation of

IEntityStorageConnector.set
