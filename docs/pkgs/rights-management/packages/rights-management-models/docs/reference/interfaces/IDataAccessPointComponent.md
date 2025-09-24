# Interface: IDataAccessPointComponent

Interface describing a Data Access Point (DAP) contract.
When receiving a request from another component, the DAP will perform
CRUD operations with enforcement of relevant policies using PEP.
The registered data handlers support specific asset types.

## Extends

- `IComponent`

## Methods

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

`undefined` | `EntityCondition`\<`IJsonLdNodeObject`\>

##### cursor

The cursor for pagination.

`undefined` | `string`

##### options

`unknown`

Additional options which might be supported by the handler.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

The items matching the query and cursor if there are more items.

***

### registerHandler()

> **registerHandler**(`handlerId`, `handler`): `Promise`\<`void`\>

Register a handler to use for a specific asset type.

#### Parameters

##### handlerId

`string`

The id of the handler to register.

##### handler

[`IDataAccessHandler`](IDataAccessHandler.md)

The handler to register.

#### Returns

`Promise`\<`void`\>

Nothing.

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
