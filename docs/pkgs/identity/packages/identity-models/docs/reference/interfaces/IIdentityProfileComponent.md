# Interface: IIdentityProfileComponent\<T, U\>

Interface describing a contract which provides profile operations.

## Extends

- `IComponent`

## Type Parameters

• **T** *extends* `IJsonLdDocument` = `IJsonLdDocument`

• **U** *extends* `IJsonLdDocument` = `IJsonLdDocument`

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
