# Class: EntityStorageIdentityProfileConnector\<T, U\>

Class which implements the identity profile connector contract.

## Type Parameters

• **T** *extends* `IJsonLdDocument` = `IJsonLdDocument`

• **U** *extends* `IJsonLdDocument` = `IJsonLdDocument`

## Implements

- `IIdentityProfileConnector`\<`T`, `U`\>

## Constructors

### new EntityStorageIdentityProfileConnector()

> **new EntityStorageIdentityProfileConnector**\<`T`, `U`\>(`options`?): [`EntityStorageIdentityProfileConnector`](EntityStorageIdentityProfileConnector.md)\<`T`, `U`\>

Create a new instance of EntityStorageIdentityProfileConnector.

#### Parameters

##### options?

[`IEntityStorageIdentityProfileConnectorConstructorOptions`](../interfaces/IEntityStorageIdentityProfileConnectorConstructorOptions.md)

The options for the identity service.

#### Returns

[`EntityStorageIdentityProfileConnector`](EntityStorageIdentityProfileConnector.md)\<`T`, `U`\>

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the identity profile connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfileConnector.CLASS_NAME`

## Methods

### create()

> **create**(`identity`, `publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

##### identity

`string`

The identity of the profile to create.

##### publicProfile?

`T`

The public profile data.

##### privateProfile?

`U`

The private profile data.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileConnector.create`

***

### get()

> **get**(`identity`, `publicPropertyNames`?, `privatePropertyNames`?): `Promise`\<\{ `publicProfile`: `Partial`\<`T`\>; `privateProfile`: `Partial`\<`U`\>; \}\>

Get the profile properties for an identity.

#### Parameters

##### identity

`string`

The identity of the item to get.

##### publicPropertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

##### privatePropertyNames?

keyof `U`[]

The private properties to get for the profile, defaults to all.

#### Returns

`Promise`\<\{ `publicProfile`: `Partial`\<`T`\>; `privateProfile`: `Partial`\<`U`\>; \}\>

The items properties.

#### Implementation of

`IIdentityProfileConnector.get`

***

### update()

> **update**(`identity`, `publicProfile`?, `privateProfile`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

##### identity

`string`

The identity to update.

##### publicProfile?

`T`

The public profile data.

##### privateProfile?

`U`

The private profile data.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileConnector.update`

***

### remove()

> **remove**(`identity`): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

##### identity

`string`

The identity to delete.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileConnector.remove`

***

### list()

> **list**(`publicFilters`?, `privateFilters`?, `publicPropertyNames`?, `privatePropertyNames`?, `cursor`?, `pageSize`?): `Promise`\<\{ `items`: `object`[]; `cursor`: `string`; \}\>

Get a list of the requested types.

#### Parameters

##### publicFilters?

`object`[]

The filters to apply to the identities public profiles.

##### privateFilters?

`object`[]

The filters to apply to the identities private profiles.

##### publicPropertyNames?

keyof `T`[]

The public properties to get for the profile, defaults to all.

##### privatePropertyNames?

keyof `U`[]

The private properties to get for the profile, defaults to all.

##### cursor?

`string`

The cursor for paged requests.

##### pageSize?

`number`

The maximum number of items in a page.

#### Returns

`Promise`\<\{ `items`: `object`[]; `cursor`: `string`; \}\>

The list of items and cursor for paging.

#### Implementation of

`IIdentityProfileConnector.list`
