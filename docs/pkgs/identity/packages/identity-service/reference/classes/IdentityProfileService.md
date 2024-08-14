# Class: IdentityProfileService

Class which implements the identity profile contract.

## Implements

- `IIdentityProfileComponent`

## Constructors

### new IdentityProfileService()

> **new IdentityProfileService**(`options`?): [`IdentityProfileService`](IdentityProfileService.md)

Create a new instance of IdentityProfileService.

#### Parameters

• **options?**

The dependencies for the identity profile service.

• **options.profileEntityConnectorType?**: `string`

The storage connector for the profiles, default to "identity-profile".

#### Returns

[`IdentityProfileService`](IdentityProfileService.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfileComponent.CLASS_NAME`

## Methods

### create()

> **create**(`properties`, `identity`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **properties**: `IIdentityProfileProperty`[]

The properties to create the profile with.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfileComponent.create`

***

### get()

> **get**(`propertyNames`?, `identity`?): `Promise`\<`object`\>

Get the profile properties for an identity.

#### Parameters

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`object`\>

The items identity and the properties.

##### identity

> **identity**: `string`

##### properties?

> `optional` **properties**: `IIdentityProfileProperty`[]

#### Implementation of

`IIdentityProfileComponent.get`

***

### getPublic()

> **getPublic**(`propertyNames`, `identity`): `Promise`\<`object`\>

Get the public profile properties for an identity.

#### Parameters

• **propertyNames**: `undefined` \| `string`[]

The properties to get for the item, defaults to all.

• **identity**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IProperty`[]

#### Implementation of

`IIdentityProfileComponent.getPublic`

***

### update()

> **update**(`properties`, `identity`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **properties**: `IIdentityProfileProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

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

> **list**(`filters`?, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested types.

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

`IIdentityProfileComponent.list`
