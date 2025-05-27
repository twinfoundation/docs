# Interface: IVerifiableStorageComponent

Interface describing a Verifiable Storage component.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`data`, `allowList?`, `options?`, `identity?`, `namespace?`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an item in verifiable storage.

#### Parameters

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

##### identity?

`string`

The identity of the user to access the vault keys.

##### namespace?

`string`

The namespace to store the item in.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the stored verifiable item in urn format and the receipt.

***

### update()

> **update**(`id`, `data?`, `allowList?`, `identity?`): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

##### id

`string`

The id of the item to update.

##### data?

`Uint8Array`\<`ArrayBufferLike`\>

The data to store, optional if updating the allow list.

##### allowList?

`string`[]

Updated list of identities that are allowed to modify the item.

##### identity?

`string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The updated receipt.

***

### get()

> **get**(`id`, `options?`): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList`: `string`[]; \}\>

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

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList`: `string`[]; \}\>

The data for the item and the receipt.

***

### remove()

> **remove**(`id`, `controllerIdentity?`): `Promise`\<`void`\>

Remove the item from verifiable storage.

#### Parameters

##### id

`string`

The id of the verifiable item to remove in urn format.

##### controllerIdentity?

`string`

The identity of the controller.

#### Returns

`Promise`\<`void`\>

Nothing.
