# Class: EntityStorageIdentityProfileConnector

Class which implements the identity profile connector contract.

## Implements

- `IIdentityProfileConnector`

## Constructors

### new EntityStorageIdentityProfileConnector()

> **new EntityStorageIdentityProfileConnector**(`options`?): [`EntityStorageIdentityProfileConnector`](EntityStorageIdentityProfileConnector.md)

Create a new instance of Identity.

#### Parameters

• **options?**

The dependencies for the identity service.

• **options.profileEntityStorageType?**: `string`

The storage connector for the profiles, default to "identity-profile".

#### Returns

[`EntityStorageIdentityProfileConnector`](EntityStorageIdentityProfileConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the identity profile connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfileConnector.CLASS_NAME`

## Methods

### create()

> **create**(`identity`, `properties`): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the profile to create.

• **properties**: `IIdentityProfileProperty`[]

The properties to create the profile with.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileConnector.create`

***

### get()

> **get**(`identity`, `includePrivate`?, `propertyNames`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the item to get.

• **includePrivate?**: `boolean`

Include private properties, defaults to true.

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IIdentityProfileProperty`[]

#### Implementation of

`IIdentityProfileConnector.get`

***

### update()

> **update**(`identity`, `properties`): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **identity**: `string`

The identity to update.

• **properties**: `IIdentityProfileProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

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

• **identity**: `string`

The identity to delete.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileConnector.remove`

***

### list()

> **list**(`includePrivate`?, `filters`?, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested types.

#### Parameters

• **includePrivate?**: `boolean`

Include private properties, defaults to false.

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

The identities.

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

`IIdentityProfileConnector.list`
