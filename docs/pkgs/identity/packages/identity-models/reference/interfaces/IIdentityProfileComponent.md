# Interface: IIdentityProfileComponent

Interface describing a contract which provides profile operations.

## Extends

- `IComponent`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the component.

#### Inherited from

`IComponent.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Inherited from

`IComponent.bootstrap`

***

### start()?

> `optional` **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.start`

***

### stop()?

> `optional` **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.stop`

***

### create()

> **create**(`properties`, `identity`?): `Promise`\<`void`\>

Create the profile properties for an identity.

#### Parameters

• **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

The properties to create the profile with.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

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

> `optional` **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

***

### getPublic()

> **getPublic**(`propertyNames`?, `identity`?): `Promise`\<`object`\>

Get the public profile properties for an identity.

#### Parameters

• **propertyNames?**: `string`[]

The properties to get for the item, defaults to all.

• **identity?**: `string`

The identity to perform the profile operation on.

#### Returns

`Promise`\<`object`\>

The items properties.

##### properties?

> `optional` **properties**: `IProperty`[]

***

### update()

> **update**(`properties`, `identity`?): `Promise`\<`void`\>

Update the profile properties of an identity.

#### Parameters

• **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

Properties for the profile, set a properties value to undefined to remove it.

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

> **list**(`filters`?, `propertyNames`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

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
