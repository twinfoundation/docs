# Class: VerifiableStorageClient

Client for performing Verifiable Storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IVerifiableStorageComponent`

## Constructors

### new VerifiableStorageClient()

> **new VerifiableStorageClient**(`config`): [`VerifiableStorageClient`](VerifiableStorageClient.md)

Create a new instance of VerifiableStorageClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`VerifiableStorageClient`](VerifiableStorageClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IVerifiableStorageComponent.CLASS_NAME`

## Methods

### create()

> **create**(`data`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an Verifiable Storage.

#### Parameters

##### data

`Uint8Array`

The data of the Verifiable Storage.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the created Verifiable Storage in urn format.

#### Implementation of

`IVerifiableStorageComponent.create`

***

### update()

> **update**(`id`, `data`): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

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

`IVerifiableStorageComponent.update`

***

### get()

> **get**(`id`, `options`?): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an Verifiable Storage.

#### Parameters

##### id

`string`

The id of the Verifiable Storage to get.

##### options?

Additional options for getting the Verifiable Storage.

###### includeData

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the Verifiable Storage.

#### Implementation of

`IVerifiableStorageComponent.get`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove an Verifiable Storage.

#### Parameters

##### id

`string`

The id of the Verifiable Storage to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVerifiableStorageComponent.remove`
