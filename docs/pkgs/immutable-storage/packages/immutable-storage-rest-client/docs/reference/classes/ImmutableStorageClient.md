# Class: ImmutableStorageClient

Client for performing Immutable Storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IImmutableStorageComponent`

## Constructors

### new ImmutableStorageClient()

> **new ImmutableStorageClient**(`config`): [`ImmutableStorageClient`](ImmutableStorageClient.md)

Create a new instance of ImmutableStorageClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`ImmutableStorageClient`](ImmutableStorageClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableStorageComponent.CLASS_NAME`

## Methods

### store()

> **store**(`data`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Store an Immutable Storage.

#### Parameters

##### data

`Uint8Array`

The data of the Immutable Storage.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the created Immutable Storage in urn format.

#### Implementation of

`IImmutableStorageComponent.store`

***

### get()

> **get**(`id`, `options`?): `Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an Immutable Storage.

#### Parameters

##### id

`string`

The id of the Immutable Storage to get.

##### options?

Additional options for getting the Immutable Storage.

###### includeData

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the Immutable Storage.

#### Implementation of

`IImmutableStorageComponent.get`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove an Immutable Storage.

#### Parameters

##### id

`string`

The id of the Immutable Storage to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IImmutableStorageComponent.remove`
