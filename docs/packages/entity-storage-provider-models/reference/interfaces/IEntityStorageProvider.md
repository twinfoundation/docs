# Interface: IEntityStorageProvider\<T\>

Interface describing an entity storage provider.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- `IService`

  ↳ **`IEntityStorageProvider`**

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
