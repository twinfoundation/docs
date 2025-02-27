# Class: ImmutableStorageService

Service for performing Immutable Storage operations to a connector.

## Implements

- `IImmutableStorageComponent`

## Constructors

### new ImmutableStorageService()

> **new ImmutableStorageService**(`options`?): [`ImmutableStorageService`](ImmutableStorageService.md)

Create a new instance of ImmutableStorageService.

#### Parameters

##### options?

[`IImmutableStorageServiceConstructorOptions`](../interfaces/IImmutableStorageServiceConstructorOptions.md)

The options for the service.

#### Returns

[`ImmutableStorageService`](ImmutableStorageService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"immutable"`

The namespace supported by the immutableStorage service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableStorageComponent.CLASS_NAME`

## Methods

### store()

> **store**(`data`, `identity`?, `namespace`?): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Store an Immutable Storage.

#### Parameters

##### data

`Uint8Array`

The data of the Immutable Storage.

##### identity?

`string`

The identity to store the Immutable Storage operation on.

##### namespace?

`string`

The namespace to use for the Immutable Storage.

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

###### includeData?

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the Immutable Storage.

#### Implementation of

`IImmutableStorageComponent.get`

***

### remove()

> **remove**(`id`, `identity`?): `Promise`\<`void`\>

Remove an Immutable Storage.

#### Parameters

##### id

`string`

The id of the Immutable Storage to remove.

##### identity?

`string`

The identity to perform the immutableStorage operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IImmutableStorageComponent.remove`
