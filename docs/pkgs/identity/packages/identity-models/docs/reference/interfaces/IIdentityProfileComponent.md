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

***

### get()

> **get**(`publicPropertyNames`?, `privatePropertyNames`?, `identity`?): `Promise`\<\{ `identity`: `string`; `publicProfile`: `Partial`\<`T`\>; `privateProfile`: `Partial`\<`U`\>; \}\>

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

`Promise`\<\{ `identity`: `string`; `publicProfile`: `Partial`\<`T`\>; `privateProfile`: `Partial`\<`U`\>; \}\>

The items identity and the properties.

***

### getPublic()

> **getPublic**(`identity`, `propertyNames`?): `Promise`\<`Partial`\<`T`\>\>

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

***

### update()

> **update**(`publicProfile`?, `privateProfile`?, `identity`?): `Promise`\<`void`\>

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

***

### remove()

> **remove**(`identity`?): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

##### identity?

`string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### list()

> **list**(`publicFilters`?, `publicPropertyNames`?, `cursor`?, `pageSize`?): `Promise`\<\{ `items`: `object`[]; `cursor`: `string`; \}\>

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

##### pageSize?

`number`

The maximum number of items in a page.

#### Returns

`Promise`\<\{ `items`: `object`[]; `cursor`: `string`; \}\>

The list of items and cursor for paging.
