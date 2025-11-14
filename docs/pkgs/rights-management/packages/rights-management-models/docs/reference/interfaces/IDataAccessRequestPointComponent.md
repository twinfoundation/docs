# Interface: IDataAccessRequestPointComponent

Interface describing a Data Access Request Point (DARP) contract.
The DARP component sends requests to the DAP for data access operations,
it will create proofs for the requests.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`url`, `assetType`, `item`): `Promise`\<`string`\>

Create an item.

#### Parameters

##### url

`string`

The URL of the data access point.

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

> **get**(`url`, `assetType`, `id`): `Promise`\<`IJsonLdNodeObject`\>

Get an item.

#### Parameters

##### url

`string`

The URL of the data access point.

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

> **update**(`url`, `assetType`, `item`): `Promise`\<`void`\>

Update an item.

#### Parameters

##### url

`string`

The URL of the data access point.

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

> **remove**(`url`, `assetType`, `id`): `Promise`\<`void`\>

Remove an item.

#### Parameters

##### url

`string`

The URL of the data access point.

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

> **query**(`url`, `assetType`, `conditions`, `cursor`, `options`): `Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

Query for items.

#### Parameters

##### url

`string`

The URL of the data access point.

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

#### Returns

`Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

The items matching the query and cursor if there are more items.
