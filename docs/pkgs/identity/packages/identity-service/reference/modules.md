# @gtsc/identity-service

## Classes

- [IdentityService](classes/IdentityService.md)

## Interfaces

- [IIdentityProfile](interfaces/IIdentityProfile.md)

## Variables

### IdentityProfileDescriptor

• `Const` **IdentityProfileDescriptor**: `IEntityDescriptor`\<[`IIdentityProfile`](interfaces/IIdentityProfile.md)\>

Entity description for a IIdentityProfile.

___

### tags

• `Const` **tags**: `ITag`[]

The tag to associate with the routes.

## Functions

### generateRestRoutes

▸ **generateRestRoutes**(`routeName`, `serviceName`): `IRestRoute`[]

The REST routes for identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routeName` | `string` | Prefix to prepend to the paths. |
| `serviceName` | `string` | The name of the service to use in the routes. |

#### Returns

`IRestRoute`[]

The generated routes.

___

### identitiesList

▸ **identitiesList**(`requestContext`, `serviceName`, `request`, `body?`): `Promise`\<`IIdentityListResponse`\>

Get the list of organizations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `serviceName` | `string` | The name of the service to use in the routes. |
| `request` | `IIdentityListRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`IIdentityListResponse`\>

The response object with additional http response properties.

___

### identityCreate

▸ **identityCreate**(`requestContext`, `serviceName`, `request`, `body?`): `Promise`\<`ICreatedResponse`\>

Create a new identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `serviceName` | `string` | The name of the service to use in the routes. |
| `request` | `IIdentityCreateRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.

___

### identityGet

▸ **identityGet**(`requestContext`, `serviceName`, `request`, `body?`): `Promise`\<`IIdentityGetResponse`\>

Get the identity details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `serviceName` | `string` | The name of the service to use in the routes. |
| `request` | `IIdentityGetRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`IIdentityGetResponse`\>

The response object with additional http response properties.

___

### identityUpdate

▸ **identityUpdate**(`requestContext`, `serviceName`, `request`, `body?`): `Promise`\<`void`\>

Update an identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `serviceName` | `string` | The name of the service to use in the routes. |
| `request` | `IIdentityUpdateRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`void`\>

The response object with additional http response properties.
