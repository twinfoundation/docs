# Class: IdentityProfileClient\<T, U\>

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Type Parameters

• **T** *extends* `IJsonLdDocument` = `IJsonLdDocument`

• **U** *extends* `IJsonLdDocument` = `IJsonLdDocument`

## Implements

- `IIdentityProfileComponent`\<`T`, `U`\>

## Constructors

### new IdentityProfileClient()

> **new IdentityProfileClient**\<`T`, `U`\>(`config`): [`IdentityProfileClient`](IdentityProfileClient.md)\<`T`, `U`\>

Create a new instance of IdentityClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`IdentityProfileClient`](IdentityProfileClient.md)\<`T`, `U`\>

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfileComponent.CLASS_NAME`

## Methods

### create()

> **create**(`publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.create`

***

### get()

> **get**(`publicPropertyNames`?, `privatePropertyNames`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **publicPropertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

• **privatePropertyNames?**: keyof `U`[]

The private properties to get for the profile, defaults to all.

#### Returns

`Promise`\<`object`\>

The identity and the items properties.

##### identity

> **identity**: `string`

##### publicProfile?

> `optional` **publicProfile**: `Partial`\<`T`\>

##### privateProfile?

> `optional` **privateProfile**: `Partial`\<`U`\>

#### Implementation of

`IIdentityProfileComponent.get`

***

### getPublic()

> **getPublic**(`identity`, `propertyNames`?): `Promise`\<`Partial`\<`T`\>\>

Get the public profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity to perform the profile operation on.

• **propertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

#### Returns

`Promise`\<`Partial`\<`T`\>\>

The items properties.

#### Implementation of

`IIdentityProfileComponent.getPublic`

***

### update()

> **update**(`publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.update`

***

### remove()

> **remove**(): `Promise`\<`void`\>

Delete the profile for an identity.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.remove`

***

### list()

> **list**(`publicFilters`?, `publicPropertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested identities.

#### Parameters

• **publicFilters?**: `object`[]

The filters to apply to the identities public profiles.

• **publicPropertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

• **cursor?**: `string`

The cursor for paged requests.

• **pageSize?**: `number`

The maximum number of items in a page.

#### Returns

`Promise`\<`object`\>

The list of items and cursor for paging.

##### items

> **items**: `object`[]

The identities.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

#### Implementation of

`IIdentityProfileComponent.list`
