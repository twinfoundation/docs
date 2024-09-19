# Interface: IImmutableStorageConnector

Interface describing an immutable storage connector.

## Extends

- `IComponent`

## Methods

### store()

> **store**(`controller`, `data`): `Promise`\<`string`\>

Store an item in immutable storage.

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **data**: `Uint8Array`

The data to store.

#### Returns

`Promise`\<`string`\>

The id of the stored immutable item in urn format.

***

### get()

> **get**(`id`): `Promise`\<`Uint8Array`\>

Get an immutable item.

#### Parameters

• **id**: `string`

The id of the item to get.

#### Returns

`Promise`\<`Uint8Array`\>

The data for the item.

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
