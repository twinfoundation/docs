# Interface: IIdentityProfile

Interface describing a contract which provides profile operations.

## Extends

- `IService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`requestContext`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### create()

> **create**(`identity`, `properties`, `requestContext`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **identity**: `string`

The identity of the profile to create.

• **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

The properties to create the profile with.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

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

> `optional` **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

***

### update()

> **update**(`identity`, `properties`, `requestContext`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **identity**: `string`

The identity to update.

• **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

Properties for the profile, set a properties value to undefined to remove it.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

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

***

### list()

> **list**(`filters`?, `propertyNames`?, `cursor`?, `pageSize`?, `requestContext`?): `Promise`\<`object`\>

Get a list of the requested identities.

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

##### identities

> **identities**: `object`[]

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
