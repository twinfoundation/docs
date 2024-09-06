# Class: IdentityProfileService\<T, U\>

Class which implements the identity profile contract.

## Type parameters

• **T** = `any`

• **U** = `any`

## Implements

- `IIdentityProfileComponent`\<`T`, `U`\>

## Constructors

### new IdentityProfileService()

> **new IdentityProfileService**\<`T`, `U`\>(`options`?): [`IdentityProfileService`](IdentityProfileService.md)\<`T`, `U`\>

Create a new instance of IdentityProfileService.

#### Parameters

• **options?**

The dependencies for the identity profile service.

• **options.profileEntityConnectorType?**: `string`

The storage connector for the profiles, default to "identity-profile".

#### Returns

[`IdentityProfileService`](IdentityProfileService.md)\<`T`, `U`\>

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfileComponent.CLASS_NAME`

## Methods

### create()

> **create**(`publicProfile`?, `privateProfile`?, `identity`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.create`

***

### get()

> **get**(`publicPropertyNames`?, `privatePropertyNames`?, `identity`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **publicPropertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

• **privatePropertyNames?**: keyof `U`[]

The private properties to get for the profile, defaults to all.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`object`\>

The items identity and the properties.

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

> **getPublic**(`identity`, `propertyNames`?): `Promise`\<`undefined` \| `Partial`\<`T`\>\>

Get the public profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity to perform the profile operation on.

• **propertyNames?**: keyof `T`[]

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`undefined` \| `Partial`\<`T`\>\>

The items properties.

#### Implementation of

`IIdentityProfileComponent.getPublic`

***

### update()

> **update**(`publicProfile`?, `privateProfile`?, `identity`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.update`

***

### remove()

> **remove**(`identity`?): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.remove`

***

### list()

> **list**(`publicFilters`?, `publicPropertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested types.

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
