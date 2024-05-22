# Class: IdentityService

Class which implements the identity contract.

## Implements

- `IIdentity`

## Constructors

### new IdentityService()

> **new IdentityService**(`dependencies`): [`IdentityService`](IdentityService.md)

Create a new instance of Identity.

#### Parameters

• **dependencies**

The dependencies for the identity service.

• **dependencies.identityConnector**: `IIdentityConnector`

The identity connector.

• **dependencies.profileEntityStorage**: `IEntityStorageConnector`\<[`IdentityProfile`](IdentityProfile.md)\>

The storage connector for the profiles.

#### Returns

[`IdentityService`](IdentityService.md)

## Methods

### identityCreate()

> **identityCreate**(`requestContext`, `role`, `properties`?): `Promise`\<`object`\>

Create a new identity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **role**: `IdentityRole`

The role for the identity.

• **properties?**: `IProperty`[]

The profile properties.

#### Returns

`Promise`\<`object`\>

The created identity details.

##### identity

> **identity**: `string`

The identity created.

#### Implementation of

`IIdentity.identityCreate`

***

### identityGet()

> **identityGet**(`requestContext`, `identity`, `propertyNames`?): `Promise`\<`object`\>

Get an item by identity.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **identity**: `string`

The identity of the item to get.

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IProperty`[]

##### role

> **role**: `IdentityRole`

#### Implementation of

`IIdentity.identityGet`

***

### identityList()

> **identityList**(`requestContext`, `role`, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Get a list of the requested types.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **role**: `IdentityRole`

The role type to lookup.

• **propertyNames?**: `string`[]

The properties to get for the identities, default to all if undefined.

• **cursor?**: `string`

The cursor for paged requests.

• **pageSize?**: `number`

The maximum number of items in a page.

#### Returns

`Promise`\<`object`\>

The list of items and cursor for paging.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### identities

> **identities**: `object`[]

The identities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`IIdentity.identityList`

***

### identityUpdate()

> **identityUpdate**(`requestContext`, `identity`, `properties`): `Promise`\<`void`\>

Update an item.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **identity**: `string`

The identity to update.

• **properties**: `IProperty`[]

Properties for the profile, set a properties value to undefined to remove it.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentity.identityUpdate`
