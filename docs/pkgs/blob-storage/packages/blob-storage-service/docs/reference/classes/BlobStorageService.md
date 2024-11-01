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

• **options.entryEntityStorageType?**: `string`

The type of the storage connector for the metadata, defaults to "blob-storage-entry".

• **options.vaultConnectorType?**: `string`

The type of the vault connector for encryption, if undefined no encryption will be performed.

• **options.config?**: [`IBlobStorageServiceConfig`](../interfaces/IBlobStorageServiceConfig.md)

The configuration for the service.

#### Returns

[`BlobStorageService`](BlobStorageService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"blob"`

The namespace supported by the blob storage service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorageComponent.CLASS_NAME`

## Methods

### create()

> **create**(`blob`, `encodingFormat`?, `fileExtension`?, `metadata`?, `namespace`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create the blob with some metadata.

#### Parameters

• **blob**: `string`

The data for the blob in base64 format.

• **encodingFormat?**: `string`

Mime type for the blob, will be detected if left undefined.

• **fileExtension?**: `string`

Extension for the blob, will be detected if left undefined.

• **metadata?**: `IJsonLdNodeObject`

Data for the custom metadata as JSON-LD.

• **namespace?**: `string`

The namespace to use for storing, defaults to component configured namespace.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageComponent.create`

***

### get()

> **get**(`id`, `includeContent`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`IBlobStorageEntry`\>

Get the blob entry.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **includeContent**: `boolean`

Include the content, or just get the metadata.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`IBlobStorageEntry`\>

The entry and data for the blob if it can be found.

#### Throws

Not found error if the blob cannot be found.

#### Implementation of

`IBlobStorageComponent.get`

***

### update()

> **update**(`id`, `encodingFormat`?, `fileExtension`?, `metadata`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

• **id**: `string`

The id of the blob entry to update.

• **encodingFormat?**: `string`

Mime type for the blob, will be detected if left undefined.

• **fileExtension?**: `string`

Extension for the blob, will be detected if left undefined.

• **metadata?**: `IJsonLdNodeObject`

Data for the custom metadata as JSON-LD.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Not found error if the blob cannot be found.

#### Implementation of

`IBlobStorageComponent.update`

***

### remove()

> **remove**(`id`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorageComponent.remove`

***

### query()

> **query**(`conditions`?, `orderBy`?, `orderByDirection`?, `cursor`?, `pageSize`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`IBlobStorageEntryList`\>

Query all the blob storage entries which match the conditions.

#### Parameters

• **conditions?**: `EntityCondition`\<`IBlobStorageEntry`\>

The conditions to match for the entries.

• **orderBy?**: `"dateCreated"` \| `"dateModified"`

The order for the results, defaults to created.

• **orderByDirection?**: `SortDirection`

The direction for the order, defaults to descending.

• **cursor?**: `string`

The cursor to request the next page of entries.

• **pageSize?**: `number`

The suggested number of entries to return in each chunk, in some scenarios can return a different amount.

• **userIdentity?**: `string`

The user identity to use with storage operations.

• **nodeIdentity?**: `string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`IBlobStorageEntryList`\>

All the entries for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IBlobStorageComponent.query`
