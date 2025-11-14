# Class: IdentityProfileRestClient\<T, U\>

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Type Parameters

### T

`T` *extends* `IJsonLdDocument` = `IJsonLdDocument`

### U

`U` *extends* `IJsonLdDocument` = `IJsonLdDocument`

## Implements

- `IIdentityProfileComponent`\<`T`, `U`\>

## Constructors

### Constructor

> **new IdentityProfileRestClient**\<`T`, `U`\>(`config`): `IdentityProfileRestClient`\<`T`, `U`\>

Create a new instance of IdentityProfileRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`IdentityProfileRestClient`\<`T`, `U`\>

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

`IIdentityProfileComponent.className`

***

### create()

> **create**(`publicProfile?`, `privateProfile?`): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

##### publicProfile?

`T`

The public profile data as JSON-LD.

##### privateProfile?

`U`

The private profile data as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.create`

***

### get()

> **get**(`publicPropertyNames?`, `privatePropertyNames?`): `Promise`\<\{ `identity`: `string`; `publicProfile?`: `Partial`\<`T`\>; `privateProfile?`: `Partial`\<`U`\>; \}\>

Get the profile properties for an identity.

#### Parameters

##### publicPropertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

##### privatePropertyNames?

keyof `U`[]

The private properties to get for the profile, defaults to all.

#### Returns

`Promise`\<\{ `identity`: `string`; `publicProfile?`: `Partial`\<`T`\>; `privateProfile?`: `Partial`\<`U`\>; \}\>

The identity and the items properties.

#### Implementation of

`IIdentityProfileComponent.get`

***

### getPublic()

> **getPublic**(`identity`, `propertyNames?`): `Promise`\<`Partial`\<`T`\>\>

Get the public profile properties for an identity.

#### Parameters

##### identity

`string`

The identity to perform the profile operation on.

##### propertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

#### Returns

`Promise`\<`Partial`\<`T`\>\>

The items properties.

#### Implementation of

`IIdentityProfileComponent.getPublic`

***

### update()

> **update**(`publicProfile?`, `privateProfile?`): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

##### publicProfile?

`T`

The public profile data as JSON-LD.

##### privateProfile?

`U`

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

> **list**(`publicFilters?`, `publicPropertyNames?`, `cursor?`, `limit?`): `Promise`\<\{ `items`: `object`[]; `cursor?`: `string`; \}\>

Get a list of the requested identities.

#### Parameters

##### publicFilters?

`object`[]

The filters to apply to the identities public profiles.

##### publicPropertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

##### cursor?

`string`

The cursor for paged requests.

##### limit?

`number`

The maximum number of items in a page.

#### Returns

`Promise`\<\{ `items`: `object`[]; `cursor?`: `string`; \}\>

The list of items and cursor for paging.

#### Implementation of

`IIdentityProfileComponent.list`
