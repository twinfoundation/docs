# Class: BlobStorageService

Service for performing blob storage operations to a connector.

## Implements

- `IBlobStorageComponent`

## Constructors

### new BlobStorageService()

> **new BlobStorageService**(`options`?): [`BlobStorageService`](BlobStorageService.md)

Create a new instance of BlobStorageService.

#### Parameters

• **options?**

The dependencies for the service.

• **options.metadataEntityStorageType?**: `string`

The type of the storage connector for the metadata, defaults to "blob-metadata".

• **options.vaultConnectorType?**: `string`

The type of the vault connector for encryption, if undefined no encryption will be performed.

• **options.config?**: [`IBlobStorageServiceConfig`](../interfaces/IBlobStorageServiceConfig.md)

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

`IBlobStorageComponent.CLASS_NAME`

## Methods

### create()

> **create**(`blob`, `metadata`?, `namespace`?, `nodeIdentity`?): `Promise`\<`string`\>

Create the blob with some metadata.

#### Parameters

• **blob**: `string`

The data for the blob in base64 format.

• **metadata?**: `IProperty`[]

Metadata to associate with the blob.

• **namespace?**: `string`

The namespace to use for storing, defaults to component configured namespace.

• **nodeIdentity?**: `string`

The node identity which controls the vault key.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageComponent.create`

***

### get()

> **get**(`id`, `includeContent`, `nodeIdentity`?): `Promise`\<`object`\>

Get the blob and metadata.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **includeContent**: `boolean`

Include the content, or just get the metadata.

• **nodeIdentity?**: `string`

The node identity which controls the vault key.

#### Returns

`Promise`\<`object`\>

The metadata and data for the blob if it can be found.

##### blob?

> `optional` **blob**: `string`

##### metadata

> **metadata**: `IProperty`[]

#### Implementation of

`IBlobStorageComponent.get`

#### Throws

Not found error if the blob cannot be found.

***

### update()

> **update**(`id`, `metadata`): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

• **id**: `string`

The id of the blob metadata to update.

• **metadata**: `IProperty`[]

Metadata to associate with the blob.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorageComponent.update`

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

`IBlobStorageComponent.remove`
