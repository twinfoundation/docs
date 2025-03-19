# Class: VerifiableStorageService

Service for performing Verifiable Storage operations to a connector.

## Implements

- `IVerifiableStorageComponent`

## Constructors

### new VerifiableStorageService()

> **new VerifiableStorageService**(`options`?): [`VerifiableStorageService`](VerifiableStorageService.md)

Create a new instance of VerifiableStorageService.

#### Parameters

##### options?

[`IVerifiableStorageServiceConstructorOptions`](../interfaces/IVerifiableStorageServiceConstructorOptions.md)

The options for the service.

#### Returns

[`VerifiableStorageService`](VerifiableStorageService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"verifiable"`

The namespace supported by the verifiableStorage service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IVerifiableStorageComponent.CLASS_NAME`

## Methods

### create()

> **create**(`data`, `identity`?, `namespace`?): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

Create an Verifiable Storage.

#### Parameters

##### data

`Uint8Array`

The data of the Verifiable Storage.

##### identity?

`string`

The identity to store the Verifiable Storage operation on.

##### namespace?

`string`

The namespace to use for the Verifiable Storage.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the created Verifiable Storage in urn format.

#### Implementation of

`IVerifiableStorageComponent.create`

***

### update()

> **update**(`id`, `data`, `identity`?): `Promise`\<`IJsonLdNodeObject`\>

Update an item in verifiable storage.

#### Parameters

##### id

`string`

The id of the item to update.

##### data

`Uint8Array`

The data to store.

##### identity?

`string`

The identity of the user to access the vault keys.

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

###### includeData?

`boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the Verifiable Storage.

#### Implementation of

`IVerifiableStorageComponent.get`

***

### remove()

> **remove**(`id`, `identity`?): `Promise`\<`void`\>

Remove an Verifiable Storage.

#### Parameters

##### id

`string`

The id of the Verifiable Storage to remove.

##### identity?

`string`

The identity to perform the verifiableStorage operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IVerifiableStorageComponent.remove`
