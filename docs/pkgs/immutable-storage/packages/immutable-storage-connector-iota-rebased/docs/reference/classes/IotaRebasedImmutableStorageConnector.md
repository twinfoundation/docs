# Class: IotaRebasedImmutableStorageConnector

Class for performing immutable storage operations on IOTA Rebased.

## Implements

- `IImmutableStorageConnector`

## Constructors

### new IotaRebasedImmutableStorageConnector()

> **new IotaRebasedImmutableStorageConnector**(`options`): [`IotaRebasedImmutableStorageConnector`](IotaRebasedImmutableStorageConnector.md)

Create a new instance of IotaRebasedImmutableStorageConnector.

#### Parameters

##### options

[`IIotaRebasedImmutableStorageConnectorConstructorOptions`](../interfaces/IIotaRebasedImmutableStorageConnectorConstructorOptions.md)

The options for the storage connector.

#### Returns

[`IotaRebasedImmutableStorageConnector`](IotaRebasedImmutableStorageConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-rebased"`

The namespace supported by the storage connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableStorageConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingConnectorType`?, `componentState`?): `Promise`\<`void`\>

Bootstrap the Immutable Storage contract.

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

`IImmutableStorageConnector.start`

***

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

The id of the stored immutable item in URN format and the receipt.

#### Implementation of

`IImmutableStorageConnector.store`

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

The id of the immutable item to remove in URN format.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the item is removed.

#### Implementation of

`IImmutableStorageConnector.remove`
