# Class: EntityStorageVerifiableStorageConnector

Class for performing verifiable storage operations on entity storage.

## Implements

- `IVerifiableStorageConnector`

## Constructors

### new EntityStorageVerifiableStorageConnector()

> **new EntityStorageVerifiableStorageConnector**(`options`?): [`EntityStorageVerifiableStorageConnector`](EntityStorageVerifiableStorageConnector.md)

Create a new instance of EntityStorageVerifiableStorageConnector.

#### Parameters

##### options?

[`IEntityStorageVerifiableStorageConnectorConstructorOptions`](../interfaces/IEntityStorageVerifiableStorageConnectorConstructorOptions.md)

The options for the class.

#### Returns

[`EntityStorageVerifiableStorageConnector`](EntityStorageVerifiableStorageConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the verifiable storage connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IVerifiableStorageConnector.CLASS_NAME`

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

The id of the stored verifiable item in urn format.

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

The id of the verifiable item to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVerifiableStorageConnector.remove`
