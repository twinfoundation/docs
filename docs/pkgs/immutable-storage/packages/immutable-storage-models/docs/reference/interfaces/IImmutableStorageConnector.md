# Interface: IImmutableStorageConnector

Interface describing an immutable storage connector.

## Extends

- `IComponent`

## Methods

### store()

> **store**(`controller`, `data`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Store an item in immutable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### data

`Uint8Array`

The data to store.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the stored immutable item in urn format and the receipt.

***

### get()

> **get**(`id`, `options`?): `Promise`\<\{ `data`: `Uint8Array`; `receipt`: `IJsonLdNodeObject`; \}\>

Get an immutable item.

#### Parameters

##### id

`string`

The id of the item to get.

##### options?

Additional options for getting the item.

###### includeData

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the item and the receipt.

***

### remove()

> **remove**(`controller`, `id`): `Promise`\<`void`\>

Remove the item from immutable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### id

`string`

The id of the immutable item to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.
