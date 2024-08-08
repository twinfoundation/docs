# Class: IdentityProfileClient

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IIdentityProfile`

## Constructors

### new IdentityProfileClient()

> **new IdentityProfileClient**(`config`): [`IdentityProfileClient`](IdentityProfileClient.md)

Create a new instance of IdentityClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`IdentityProfileClient`](IdentityProfileClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfile.CLASS_NAME`

## Methods

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

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### create()

> **create**(`properties`): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **properties**: `IIdentityProfileProperty`[]

The properties to create the profile with.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.create`

***

### get()

> **get**(`propertyNames`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IIdentityProfileProperty`[]

#### Implementation of

`IIdentityProfile.get`

***

### update()

> **update**(`properties`): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **properties**: `IIdentityProfileProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.update`

***

### remove()

> **remove**(): `Promise`\<`void`\>

Delete the profile for an identity.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.remove`

***

### list()

> **list**(`filters`?, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested identities.

#### Parameters

• **filters?**: `object`[]

The filters to apply to the identities.

• **propertyNames?**: `string`[]

The properties to get for the identities, default to all if undefined.

• **cursor?**: `string`

The cursor for paged requests.

• **pageSize?**: `number`

The maximum number of items in a page.

#### Returns

`Promise`\<`object`\>

The list of items and cursor for paging.

##### items

> **items**: `object`[]

The items.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`IIdentityProfile.list`
