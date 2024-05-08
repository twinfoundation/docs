# Interface: IIdentity

Interface describing a contract which provides identity operations.

## Hierarchy

- `IService`

  ↳ **`IIdentity`**

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

### identityCreate

▸ **identityCreate**(`requestContext`, `role`, `properties?`): `Promise`\<\{ `identity`: `string`  }\>

Create a new identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | [`IdentityRole`](../enums/IdentityRole.md) | The role for the identity. |
| `properties?` | `IProperty`[] | The profile properties. |

#### Returns

`Promise`\<\{ `identity`: `string`  }\>

The created identity details.

___

### identityGet

▸ **identityGet**(`requestContext`, `identity`, `propertyNames?`): `Promise`\<\{ `properties?`: `IProperty`[] ; `role`: [`IdentityRole`](../enums/IdentityRole.md)  }\>

Get an item by identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity of the item to get. |
| `propertyNames?` | `string`[] | The properties to get for the item, defaults to all. |

#### Returns

`Promise`\<\{ `properties?`: `IProperty`[] ; `role`: [`IdentityRole`](../enums/IdentityRole.md)  }\>

The items properties.

___

### identityList

▸ **identityList**(`requestContext`, `role`, `propertyNames?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Get a list of the requested types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | [`IdentityRole`](../enums/IdentityRole.md) | The role type to lookup. |
| `propertyNames?` | `string`[] | The properties to get for the identities, default to all if undefined. |
| `cursor?` | `string` | The cursor for paged requests. |
| `pageSize?` | `number` | The maximum number of items in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

The list of items and cursor for paging.

___

### identityUpdate

▸ **identityUpdate**(`requestContext`, `identity`, `properties`): `Promise`\<`void`\>

Update an item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to update. |
| `properties` | `IProperty`[] | Properties for the profile, set a properties value to undefined to remove it. |

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
