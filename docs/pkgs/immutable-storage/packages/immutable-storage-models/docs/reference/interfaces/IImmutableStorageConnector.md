# Interface: IImmutableStorageConnector

Interface describing an immutable storage connector.

## Extends

- `IComponent`

## Methods

### store()

> **store**(`controller`, `data`): `Promise`\<`object`\>

Store an item in immutable storage.

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **data**: `Uint8Array`

The data to store.

#### Returns

`Promise`\<`object`\>

The id of the stored immutable item in urn format and the receipt.

##### id

> **id**: `string`

##### receipt

> **receipt**: `IJsonLdNodeObject`

***

### get()

> **get**(`id`, `options`?): `Promise`\<`object`\>

Get an immutable item.

#### Parameters

• **id**: `string`

The id of the item to get.

• **options?**

Additional options for getting the item.

• **options.includeData?**: `boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<`object`\>

The data for the item and the receipt.

##### data?

> `optional` **data**: `Uint8Array`

##### receipt

> **receipt**: `IJsonLdNodeObject`

***

### remove()

> **remove**(`controller`, `id`): `Promise`\<`void`\>

Remove the item from immutable storage.

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **id**: `string`

The id of the immutable item to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.
