# Interface: IVerifiableStorageConnector

Interface describing a verifiable storage connector.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`controller`, `data`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an item in verifiable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### data

`Uint8Array`

The data to store.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the stored verifiable item in urn format and the receipt.

***

### update()

> **update**(`controller`, `id`, `data`): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### id

`string`

The id of the item to update.

##### data

`Uint8Array`

The data to store.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The updated receipt.

***

### get()

> **get**(`id`, `options?`): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an verifiable item.

#### Parameters

##### id

`string`

The id of the item to get.

##### options?

Additional options for getting the item.

###### includeData?

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the item and the receipt.

***

### remove()

> **remove**(`controller`, `id`): `Promise`\<`void`\>

Remove the item from verifiable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### id

`string`

The id of the verifiable item to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.
