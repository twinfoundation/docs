# Class: IotaStardustImmutableStorageConnector

Class for performing immutable storage operations on IOTA Stardust.

## Implements

- `IImmutableStorageConnector`

## Constructors

### new IotaStardustImmutableStorageConnector()

> **new IotaStardustImmutableStorageConnector**(`options`): [`IotaStardustImmutableStorageConnector`](IotaStardustImmutableStorageConnector.md)

Create a new instance of IotaStardustImmutableStorageConnector.

#### Parameters

##### options

[`IIotaStardustImmutableStorageConnectorConstructorOptions`](../interfaces/IIotaStardustImmutableStorageConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`IotaStardustImmutableStorageConnector`](IotaStardustImmutableStorageConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-stardust"`

The namespace supported by the immutable storage connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableStorageConnector.CLASS_NAME`

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

#### Implementation of

`IImmutableStorageConnector.store`

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

#### Implementation of

`IImmutableStorageConnector.get`

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

#### Implementation of

`IImmutableStorageConnector.remove`
