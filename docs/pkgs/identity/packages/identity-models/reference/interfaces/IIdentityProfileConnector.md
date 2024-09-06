# Interface: IIdentityProfileConnector\<T, U\>

Interface describing a contract which provides profile operations.

## Extends

- `IComponent`

## Type parameters

• **T** = `any`

• **U** = `any`

## Methods

### create()

> **create**(`identity`, `publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the profile to create.

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### get()

> **get**(`identity`, `publicPropertyNames`?, `privatePropertyNames`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the item to get.

• **publicPropertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

• **privatePropertyNames?**: keyof `U`[]

The private properties to get for the profile, defaults to all.

#### Returns

`Promise`\<`object`\>

The identity profile, will only return private data if you have correct permissions.

##### publicProfile?

> `optional` **publicProfile**: `Partial`\<`T`\>

##### privateProfile?

> `optional` **privateProfile**: `Partial`\<`U`\>

***

### update()

> **update**(`identity`, `publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **identity**: `string`

The identity to update.

• **publicProfile?**: `T`

The public profile data as JSON-LD.

• **privateProfile?**: `U`

The private profile data as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### remove()

> **remove**(`identity`): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

• **identity**: `string`

The identity to delete.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### list()

> **list**(`publicFilters`?, `privateFilters`?, `publicPropertyNames`?, `privatePropertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested identities.

#### Parameters

• **publicFilters?**: `object`[]

The filters to apply to the identities public profiles.

• **privateFilters?**: `object`[]

The filters to apply to the identities private profiles.

• **publicPropertyNames?**: keyof `T`[]

The public properties to get for the profile, defaults to all.

• **privatePropertyNames?**: keyof `U`[]

The private properties to get for the profile, defaults to all.

• **cursor?**: `string`

The cursor for paged requests.

• **pageSize?**: `number`

The maximum number of items in a page.

#### Returns

`Promise`\<`object`\>

The list of items and cursor for paging.

##### items

> **items**: `object`[]

The identity profiles.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.
