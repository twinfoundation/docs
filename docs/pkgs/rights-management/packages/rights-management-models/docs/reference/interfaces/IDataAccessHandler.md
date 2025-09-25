# Interface: IDataAccessHandler

Interface describing a Data Access Handler.

## Methods

### supportedAssetTypes()

> **supportedAssetTypes**(): `string`[]

The asset types supported by this handler.

#### Returns

`string`[]

The supported asset types.

***

### create()

> **create**(`assetType`, `item`): `Promise`\<`string`\>

Create an item.

#### Parameters

##### assetType

`string`

The type of the item to create.

##### item

`IJsonLdNodeObject`

The item to create.

#### Returns

`Promise`\<`string`\>

The id of the item created, for some items this is supplied in the `item`.

***

### get()

> **get**(`assetType`, `id`): `Promise`\<`IJsonLdNodeObject`\>

Get an item.

#### Parameters

##### assetType

`string`

The type of the item to retrieve.

##### id

`string`

The ID of the item to retrieve.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The item retrieved if the policies allow it.

***

### update()

> **update**(`assetType`, `item`): `Promise`\<`void`\>

Update an item.

#### Parameters

##### assetType

`string`

The type of the item to update.

##### item

`IJsonLdNodeObject`

The item to update.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### remove()

> **remove**(`assetType`, `id`): `Promise`\<`void`\>

Remove an item.

#### Parameters

##### assetType

`string`

The type of the item to remove.

##### id

`string`

The id of the item to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`assetType`, `conditions`, `cursor`, `options`): `Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

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

#### Returns

`Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

The items matching the query and cursor if there are more items.
