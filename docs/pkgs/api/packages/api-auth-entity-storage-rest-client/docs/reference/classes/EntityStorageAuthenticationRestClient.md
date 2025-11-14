# Class: EntityStorageAuthenticationRestClient

The client to connect to the authentication service.

## Extends

- `BaseRestClient`

## Implements

- `IAuthenticationComponent`

## Constructors

### Constructor

> **new EntityStorageAuthenticationRestClient**(`config`): `EntityStorageAuthenticationRestClient`

Create a new instance of EntityStorageAuthenticationRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`EntityStorageAuthenticationRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IAuthenticationComponent.className`

***

### login()

> **login**(`email`, `password`): `Promise`\<\{ `token?`: `string`; `expiry`: `number`; \}\>

Perform a login for the user.

#### Parameters

##### email

`string`

The email address for the user.

##### password

`string`

The password for the user.

#### Returns

`Promise`\<\{ `token?`: `string`; `expiry`: `number`; \}\>

The authentication token for the user, if it uses a mechanism with public access.

#### Implementation of

`IAuthenticationComponent.login`

***

### logout()

> **logout**(`token?`): `Promise`\<`void`\>

Logout the current user.

#### Parameters

##### token?

`string`

The token to logout, if it uses a mechanism with public access.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuthenticationComponent.logout`

***

### refresh()

> **refresh**(`token?`): `Promise`\<\{ `token?`: `string`; `expiry`: `number`; \}\>

Refresh the token.

#### Parameters

##### token?

`string`

The token to refresh, if it uses a mechanism with public access.

#### Returns

`Promise`\<\{ `token?`: `string`; `expiry`: `number`; \}\>

The refreshed token, if it uses a mechanism with public access.

#### Implementation of

`IAuthenticationComponent.refresh`

***

### updatePassword()

> **updatePassword**(`email`, `currentPassword`, `newPassword`): `Promise`\<`void`\>

Update the user's password.

#### Parameters

##### email

`string`

The email address of the user to update.

##### currentPassword

`string`

The current password for the user.

##### newPassword

`string`

The new password for the user.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuthenticationComponent.updatePassword`

***

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request?`, `options?`): `Promise`\<`U`\>

Perform a request in json format.

#### Type Parameters

##### T

`T` *extends* `IHttpRequest`\<`any`\>

##### U

`U` *extends* `IHttpResponse`\<`any`\>

#### Parameters

##### route

`string`

The route of the request.

##### method

`HttpMethod`

The http method.

##### request?

`T`

Request to send to the endpoint.

##### options?

Additional options for the request.

###### authenticationGeneratorType?

`string`

Use a custom authentication type for the request.

###### authenticationData?

`unknown`

Used to authenticate and will be passed to the configured authentication provider for the request.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`
