# Class: DataAccessPointRestClient

Client for performing Rights Management Data Access through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IDataAccessPointComponent`

## Constructors

### Constructor

> **new DataAccessPointRestClient**(`config`): `DataAccessPointRestClient`

Create a new instance of DataAccessPointRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`DataAccessPointRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IDataAccessPointComponent.className`

***

### create()

> **create**(`assetType`, `item`, `actionRequest`): `Promise`\<`string`\>

Create an item.

#### Parameters

##### assetType

`string`

The type of the item to create.

##### item

`IJsonLdNodeObject`

The item to create.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`string`\>

The id of the item created, for some items this is supplied in the `item`.

#### Implementation of

`IDataAccessPointComponent.create`

***

### get()

> **get**(`assetType`, `id`, `actionRequest`): `Promise`\<`IJsonLdNodeObject`\>

Get an item.

#### Parameters

##### assetType

`string`

The type of the item to retrieve.

##### id

`string`

The ID of the item to retrieve.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The item retrieved if the policies allow it.

#### Implementation of

`IDataAccessPointComponent.get`

***

### update()

> **update**(`assetType`, `item`, `actionRequest`): `Promise`\<`void`\>

Update an item.

#### Parameters

##### assetType

`string`

The type of the item to update.

##### item

`IJsonLdNodeObject`

The item to update.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessPointComponent.update`

***

### remove()

> **remove**(`assetType`, `id`, `actionRequest`): `Promise`\<`void`\>

Remove an item.

#### Parameters

##### assetType

`string`

The type of the item to remove.

##### id

`string`

The id of the item to remove.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessPointComponent.remove`

***

### query()

> **query**(`assetType`, `conditions`, `cursor`, `options`, `actionRequest`): `Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

Query for items.

#### Parameters

##### assetType

`string`

The type of the item to query.

##### conditions

The conditions to apply to the query.

`EntityCondition`\<`IJsonLdNodeObject`\> | `undefined`

##### cursor

The cursor for pagination.

`string` | `undefined`

##### options

`unknown`

Additional options which might be supported by the handler.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

The items matching the query and cursor if there are more items.

#### Implementation of

`IDataAccessPointComponent.query`

***

### registerHandler()

> **registerHandler**(`handlerId`, `handler`): `Promise`\<`void`\>

Register a handler to use for a specific asset type.

#### Parameters

##### handlerId

`string`

The id of the handler to register.

##### handler

`IDataAccessHandler`

The handler to register.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessPointComponent.registerHandler`

***

### unregisterHandler()

> **unregisterHandler**(`handlerId`): `Promise`\<`void`\>

Unregister a handler from the handling.

#### Parameters

##### handlerId

`string`

The id of the handler to unregister.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessPointComponent.unregisterHandler`
