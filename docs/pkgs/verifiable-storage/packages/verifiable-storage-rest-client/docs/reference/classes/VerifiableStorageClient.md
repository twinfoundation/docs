# Class: VerifiableStorageClient

Client for performing Verifiable Storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IVerifiableStorageComponent`

## Constructors

### Constructor

> **new VerifiableStorageClient**(`config`): `VerifiableStorageClient`

Create a new instance of VerifiableStorageClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`VerifiableStorageClient`

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

> **create**(`data`, `allowList?`, `options?`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create a verifiable storage item.

#### Parameters

##### data

`Uint8Array`

The data for the verifiable storage item.

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

The id of the created verifiable storage item.

#### Implementation of

`IVerifiableStorageComponent.create`

***

### update()

> **update**(`id`, `data?`, `allowList?`): `Promise`\<`IJsonLdNodeObject`\>

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

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The updated receipt.

#### Implementation of

`IVerifiableStorageComponent.update`

***

### get()

> **get**(`id`, `options?`): `Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an verifiable storage item.

#### Parameters

##### id

`string`

The id of the verifiable storage item to get.

##### options?

Additional options for getting the verifiable storage item.

###### includeData

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the verifiable storage item.

#### Implementation of

`IVerifiableStorageComponent.get`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove a verifiable storage item.

#### Parameters

##### id

`string`

The id of the verifiable storage item to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVerifiableStorageComponent.remove`
