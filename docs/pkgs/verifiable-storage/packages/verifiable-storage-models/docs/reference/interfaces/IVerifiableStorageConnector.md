# Interface: IVerifiableStorageConnector

Interface describing a verifiable storage connector.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`controller`, `data`, `allowList?`, `options?`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an item in verifiable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### data

`Uint8Array`

The data to store.

##### allowList?

`string`[]

The list of identities that are allowed to modify the item.

##### options?

Additional options for creating the item.

###### maxAllowListSize?

`number`

The maximum size of the allow list.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the stored verifiable item in urn format and the receipt.

***

### update()

> **update**(`controller`, `id`, `data?`, `allowList?`): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### id

`string`

The id of the item to update.

##### data?

`Uint8Array`\<`ArrayBufferLike`\>

The data to store, optional if updating the allow list.

##### allowList?

`string`[]

Updated list of identities that are allowed to modify the item.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The updated receipt.

***

### get()

> **get**(`id`, `options?`): `Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList?`: `string`[]; \}\>

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

###### includeAllowList?

`boolean`

Should the allow list be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList?`: `string`[]; \}\>

The data for the item, the receipt and the allow list.

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
