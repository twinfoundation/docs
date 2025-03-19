# Class: IotaVerifiableStorageConnector

Class for performing verifiable storage operations on IOTA.

## Implements

- `IVerifiableStorageConnector`

## Constructors

### new IotaVerifiableStorageConnector()

> **new IotaVerifiableStorageConnector**(`options`): [`IotaVerifiableStorageConnector`](IotaVerifiableStorageConnector.md)

Create a new instance of IotaVerifiableStorageConnector.

#### Parameters

##### options

[`IIotaVerifiableStorageConnectorConstructorOptions`](../interfaces/IIotaVerifiableStorageConnectorConstructorOptions.md)

The options for the storage connector.

#### Returns

[`IotaVerifiableStorageConnector`](IotaVerifiableStorageConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the storage connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IVerifiableStorageConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingConnectorType`?, `componentState`?): `Promise`\<`void`\>

Bootstrap the Verifiable Storage contract.

#### Parameters

##### nodeIdentity

`string`

The identity of the node.

##### nodeLoggingConnectorType?

`string`

The node logging connector type, defaults to "node-logging".

##### componentState?

#### Returns

`Promise`\<`void`\>

True if the bootstrapping process was successful.

#### Implementation of

`IVerifiableStorageConnector.start`

***

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

The id of the stored verifiable item in URN format and the receipt.

#### Implementation of

`IVerifiableStorageConnector.create`

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

#### Implementation of

`IVerifiableStorageConnector.update`

***

### get()

> **get**(`id`, `options`?): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get a verifiable item.

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

`IVerifiableStorageConnector.get`

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

The id of the verifiable item to remove in URN format.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the item is removed.

#### Implementation of

`IVerifiableStorageConnector.remove`
