# Interface: IImmutableStorageComponent

Interface describing an Immutable Storage component.

## Extends

- `IComponent`

## Methods

### store()

> **store**(`data`, `identity`?, `namespace`?): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Store an item in immutable storage.

#### Parameters

##### data

`Uint8Array`

The data to store.

##### identity?

`string`

The identity of the user to access the vault keys.

##### namespace?

`string`

The namespace to store the item in.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the stored immutable item in urn format and the receipt.

***

### get()

> **get**(`id`, `options`?): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an immutable item.

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

> **remove**(`id`, `controllerIdentity`?): `Promise`\<`void`\>

Remove the item from immutable storage.

#### Parameters

##### id

`string`

The id of the immutable item to remove in urn format.

##### controllerIdentity?

`string`

The identity of the controller.

#### Returns

`Promise`\<`void`\>

Nothing.
