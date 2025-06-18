# Class: VerifiableStorageService

Service for performing Verifiable Storage operations to a connector.

## Implements

- `IVerifiableStorageComponent`

## Constructors

### Constructor

> **new VerifiableStorageService**(`options?`): `VerifiableStorageService`

Create a new instance of VerifiableStorageService.

#### Parameters

##### options?

[`IVerifiableStorageServiceConstructorOptions`](../interfaces/IVerifiableStorageServiceConstructorOptions.md)

The options for the service.

#### Returns

`VerifiableStorageService`

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

> **create**(`data`, `allowList?`, `options?`, `identity?`, `namespace?`): `Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

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

##### identity?

`string`

The identity to store the Verifiable Storage operation on.

##### namespace?

`string`

The namespace to use for the Verifiable Storage.

#### Returns

`Promise`\<\{ `id`: `string`; `receipt`: `IJsonLdNodeObject`; \}\>

The id of the created verifiable storage item.

#### Implementation of

`IVerifiableStorageComponent.create`

***

### update()

> **update**(`id`, `data?`, `allowList?`, `identity?`): `Promise`\<`IJsonLdNodeObject`\>

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

> **get**(`id`, `options?`): `Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

Get an Verifiable Storage.

#### Parameters

##### id

`string`

The id of the verifiable storage item to get.

##### options?

Additional options for getting the verifiable storage item.

###### includeData?

`boolean`

Should the data be included in the response, defaults to true.

###### includeAllowList?

`boolean`

Should the allow list be included in the response, defaults to true.

#### Returns

`Promise`\<\{ `data?`: `Uint8Array`\<`ArrayBufferLike`\>; `receipt`: `IJsonLdNodeObject`; \}\>

The data for the verifiable storage item.

#### Implementation of

`IVerifiableStorageComponent.get`

***

### remove()

> **remove**(`id`, `identity?`): `Promise`\<`void`\>

Remove a verifiable storage item.

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
