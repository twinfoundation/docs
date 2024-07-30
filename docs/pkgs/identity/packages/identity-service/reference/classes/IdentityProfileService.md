# Class: IdentityProfileService

Class which implements the identity contract.

## Implements

- `IIdentityProfile`

## Constructors

### new IdentityProfileService()

> **new IdentityProfileService**(`options`?): [`IdentityProfileService`](IdentityProfileService.md)

Create a new instance of Identity.

#### Parameters

• **options?**

The dependencies for the identity service.

• **options.profileEntityStorageType?**: `string`

The storage connector for the profiles, default to "identity-profile".

#### Returns

[`IdentityProfileService`](IdentityProfileService.md)

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityProfile.CLASS_NAME`

## Methods

### create()

> **create**(`identity`, `properties`, `requestContext`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the profile to create.

• **properties**: `IIdentityProfileProperty`[]

The properties to create the profile with.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.create`

***

### get()

> **get**(`identity`, `propertyNames`?, `requestContext`?): `Promise`\<`object`\>

Get the profile properties for an identity.
if matching authenticated user private properties are also returned.

#### Parameters

• **identity**: `string`

The identity of the item to get.

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IIdentityProfileProperty`[]

#### Implementation of

`IIdentityProfile.get`

***

### update()

> **update**(`identity`, `properties`, `requestContext`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **identity**: `string`

The identity to update.

• **properties**: `IIdentityProfileProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.update`

***

### remove()

> **remove**(`identity`, `requestContext`?): `Promise`\<`void`\>

Delete the profile for an identity.

#### Parameters

• **identity**: `string`

The identity to delete.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityProfile.remove`

***

### list()

> **list**(`filters`?, `propertyNames`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

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

• **requestContext?**: `IServiceRequestContext`

The context for the request.

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

`IIdentityProfile.list`
