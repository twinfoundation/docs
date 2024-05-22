# Class: IdentityClient

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IIdentity`

## Constructors

### new IdentityClient()

> **new IdentityClient**(`config`): [`IdentityClient`](IdentityClient.md)

Create a new instance of IdentityClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`IdentityClient`](IdentityClient.md)

#### Overrides

`BaseRestClient.constructor`

## Methods

### fetch()

> **fetch**\<`T`, `U`\>(`requestContext`, `route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`unknown`\>

• **U** *extends* `IHttpResponse`\<`unknown`\>

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **route**: `string`

The route of the request.

• **method**: `HttpMethods`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

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

### identityCreate()

> **identityCreate**(`requestContext`, `role`, `properties`?): `Promise`\<`object`\>

Create a new identity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **role**: `IdentityRole`

The role for the identity.

• **properties?**: `IProperty`[]

The profile properties.

#### Returns

`Promise`\<`object`\>

The created identity details.

##### identity

> **identity**: `string`

The identity created.

#### Implementation of

`IIdentity.identityCreate`

***

### identityGet()

> **identityGet**(`requestContext`, `identity`, `propertyNames`?): `Promise`\<`object`\>

Get an item by identity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **identity**: `string`

The identity of the item to get.

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IProperty`[]

##### role

> **role**: `IdentityRole`

#### Implementation of

`IIdentity.identityGet`

***

### identityList()

> **identityList**(`requestContext`, `role`, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested types.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **role**: `IdentityRole`

The role type to lookup.

• **propertyNames?**: `string`[]

The properties to get for the identities, default to all if undefined.

• **cursor?**: `string`

The cursor for paged requests.

• **pageSize?**: `number`

The maximum number of items in a page.

#### Returns

`Promise`\<`object`\>

The list of items and cursor for paging.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### identities

> **identities**: `object`[]

The identities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`IIdentity.identityList`

***

### identityUpdate()

> **identityUpdate**(`requestContext`, `identity`, `properties`): `Promise`\<`void`\>

Update an item.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **identity**: `string`

The identity to update.

• **properties**: `IProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentity.identityUpdate`
