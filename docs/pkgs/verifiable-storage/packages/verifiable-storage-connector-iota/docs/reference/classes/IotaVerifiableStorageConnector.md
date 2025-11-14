# Class: IotaVerifiableStorageConnector

Class for performing verifiable storage operations on IOTA.

## Implements

- `IVerifiableStorageConnector`

## Constructors

### Constructor

> **new IotaVerifiableStorageConnector**(`options`): `IotaVerifiableStorageConnector`

Create a new instance of IotaVerifiableStorageConnector.

#### Parameters

##### options

[`IIotaVerifiableStorageConnectorConstructorOptions`](../interfaces/IIotaVerifiableStorageConnectorConstructorOptions.md)

The options for the storage connector.

#### Returns

`IotaVerifiableStorageConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the storage connector.

***

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IVerifiableStorageConnector.className`

***

### start()

> **start**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

Bootstrap the Verifiable Storage contract.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

True if the bootstrapping process was successful.

#### Implementation of

`IVerifiableStorageConnector.start`

***

### create()

> **create**(`controllerIdentity`, `data`, `allowList?`, `options?`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an item in verifiable storage.

#### Parameters

##### controllerIdentity

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

The id of the stored verifiable item in URN format and the receipt.

#### Implementation of

`IVerifiableStorageConnector.create`

***

### update()

> **update**(`controllerIdentity`, `id`, `data?`, `allowList?`): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

##### controllerIdentity

`string`

The identity of the user to access the vault keys.

##### id

`string`

The id of the item to update.

##### data?

`Uint8Array`\<`ArrayBufferLike`\>

The data to store.

##### allowList?

`string`[]

Updated list of identities that are allowed to modify the item.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The updated receipt.

#### Implementation of

`IVerifiableStorageConnector.update`

***

### get()

> **get**(`id`, `options?`): `Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList?`: `string`[]; \}\>

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

###### includeAllowList?

`boolean`

Should the allow list be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; `allowList?`: `string`[]; \}\>

The data for the item, the receipt and the allow list.

#### Implementation of

`IVerifiableStorageConnector.get`

***

### remove()

> **remove**(`controllerIdentity`, `id`): `Promise`\<`void`\>

Remove the item from verifiable storage.

#### Parameters

##### controllerIdentity

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
