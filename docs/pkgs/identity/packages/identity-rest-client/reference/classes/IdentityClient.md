# Class: IdentityClient

Client for performing identity through to REST endpoints.

## Hierarchy

- `BaseRestClient`

  ↳ **`IdentityClient`**

## Implements

- `IIdentity`

## Constructors

### constructor

• **new IdentityClient**(`config`): [`IdentityClient`](IdentityClient.md)

Create a new instance of IdentityClient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `IBaseRestClientConfig` | The configuration for the client. |

#### Returns

[`IdentityClient`](IdentityClient.md)

#### Overrides

BaseRestClient.constructor

## Methods

### fetch

▸ **fetch**\<`T`, `U`\>(`requestContext`, `route`, `method`, `request?`): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IHttpRequest`\<`unknown`\> |
| `U` | extends `IHttpResponse`\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `route` | `string` | The route of the request. |
| `method` | `HttpMethods` | The http method. |
| `request?` | `T` | Request to send to the endpoint. |

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

BaseRestClient.fetch

___

### getEndpointWithPrefix

▸ **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

BaseRestClient.getEndpointWithPrefix

___

### identityCreate

▸ **identityCreate**(`requestContext`, `role`, `properties?`): `Promise`\<\{ `identity`: `string`  }\>

Create a new identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | `IdentityRole` | The role for the identity. |
| `properties?` | `IProperty`[] | The profile properties. |

#### Returns

`Promise`\<\{ `identity`: `string`  }\>

The created identity details.

#### Implementation of

IIdentity.identityCreate

___

### identityGet

▸ **identityGet**(`requestContext`, `identity`, `propertyNames?`): `Promise`\<\{ `properties?`: `IProperty`[] ; `role`: `IdentityRole`  }\>

Get an item by identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity of the item to get. |
| `propertyNames?` | `string`[] | The properties to get for the item, defaults to all. |

#### Returns

`Promise`\<\{ `properties?`: `IProperty`[] ; `role`: `IdentityRole`  }\>

The items properties.

#### Implementation of

IIdentity.identityGet

___

### identityList

▸ **identityList**(`requestContext`, `role`, `propertyNames?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Get a list of the requested types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | `IdentityRole` | The role type to lookup. |
| `propertyNames?` | `string`[] | The properties to get for the identities, default to all if undefined. |
| `cursor?` | `string` | The cursor for paged requests. |
| `pageSize?` | `number` | The maximum number of items in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

The list of items and cursor for paging.

#### Implementation of

IIdentity.identityList

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

#### Implementation of

IIdentity.identityUpdate
