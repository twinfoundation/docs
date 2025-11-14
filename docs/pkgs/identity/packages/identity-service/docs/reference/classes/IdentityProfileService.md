# Class: IdentityProfileService\<T, U\>

Class which implements the identity profile contract.

## Type Parameters

### T

`T` *extends* `IJsonLdDocument` = `IJsonLdDocument`

### U

`U` *extends* `IJsonLdDocument` = `IJsonLdDocument`

## Implements

- `IIdentityProfileComponent`\<`T`, `U`\>

## Constructors

### Constructor

> **new IdentityProfileService**\<`T`, `U`\>(`options?`): `IdentityProfileService`\<`T`, `U`\>

Create a new instance of IdentityProfileService.

#### Parameters

##### options?

[`IIdentityProfileServiceConstructorOptions`](../interfaces/IIdentityProfileServiceConstructorOptions.md)

The dependencies for the identity profile service.

#### Returns

`IdentityProfileService`\<`T`, `U`\>

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

> **create**(`publicProfile?`, `privateProfile?`, `identity?`): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

##### publicProfile?

`T`

The public profile data as JSON-LD.

##### privateProfile?

`U`

The private profile data as JSON-LD.

##### identity?

`string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.create`

***

### get()

> **get**(`publicPropertyNames?`, `privatePropertyNames?`, `identity?`): `Promise`\<\{ `identity`: `string`; `publicProfile?`: `Partial`\<`T`\>; `privateProfile?`: `Partial`\<`U`\>; \}\>

Get the profile properties for an identity.

#### Parameters

##### publicPropertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

##### privatePropertyNames?

keyof `U`[]

The private properties to get for the profile, defaults to all.

##### identity?

`string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<\{ `identity`: `string`; `publicProfile?`: `Partial`\<`T`\>; `privateProfile?`: `Partial`\<`U`\>; \}\>

The items identity and the properties.

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

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`Partial`\<`T`\>\>

The items properties.

#### Implementation of

`IIdentityProfileComponent.getPublic`

***

### update()

> **update**(`publicProfile?`, `privateProfile?`, `identity?`): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

##### publicProfile?

`T`

The public profile data as JSON-LD.

##### privateProfile?

`U`

The private profile data as JSON-LD.

##### identity?

`string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.update`

***

### remove()

> **remove**(`identity?`): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

##### identity?

`string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.remove`

***

### list()

> **list**(`publicFilters?`, `publicPropertyNames?`, `cursor?`, `limit?`): `Promise`\<\{ `items`: `object`[]; `cursor?`: `string`; \}\>

Get a list of the requested types.

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
