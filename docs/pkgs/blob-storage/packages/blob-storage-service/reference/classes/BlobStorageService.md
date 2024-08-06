# Class: BlobStorageService

Service for performing blob storage operations to a connector.

## Implements

- `IBlobStorage`

## Constructors

### new BlobStorageService()

> **new BlobStorageService**(`config`?): [`BlobStorageService`](BlobStorageService.md)

Create a new instance of BlobStorageService.

#### Parameters

• **config?**: [`IBlobStorageServiceConfig`](../interfaces/IBlobStorageServiceConfig.md)

The configuration for the service.

#### Returns

[`BlobStorageService`](BlobStorageService.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"blob"`

The namespace supported by the blob storage service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorage.CLASS_NAME`

## Methods

### set()

> **set**(`blob`, `options`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **options?**

Additional options for the blob.

• **options.namespace?**: `string`

The namespace to use for storing, defaults to service configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorage.set`

***

### get()

> **get**(`id`): `Promise`\<`Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`Uint8Array`\>

The data for the blob if it can be found.

#### Implementation of

`IBlobStorage.get`

#### Throws

Not found error if the blob cannot be found.

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorage.remove`
