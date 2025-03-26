# Class: BlobStorageClient

Client for performing blob storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IBlobStorageComponent`

## Constructors

### new BlobStorageClient()

> **new BlobStorageClient**(`config`): [`BlobStorageClient`](BlobStorageClient.md)

Create a new instance of BlobStorageClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`BlobStorageClient`](BlobStorageClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `BlobStorageClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`IBlobStorageComponent.CLASS_NAME`

## Methods

### create()

> **create**(`blob`, `encodingFormat`?, `fileExtension`?, `metadata`?, `namespace`?): `Promise`\<`string`\>

Create the blob with some metadata.

#### Parameters

##### blob

`string`

The data for the blob in base64 format.

##### encodingFormat?

`string`

Mime type for the blob, will be detected if left undefined.

##### fileExtension?

`string`

Extension for the blob, will be detected if left undefined.

##### metadata?

`IJsonLdNodeObject`

Data for the custom metadata as JSON-LD.

##### namespace?

`string`

The namespace to use for storing, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageComponent.create`

***

### get()

> **get**(`id`, `includeContent`): `Promise`\<`IBlobStorageEntry`\>

Get the blob and metadata.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

##### includeContent

`boolean`

Include the content, or just get the metadata.

#### Returns

`Promise`\<`IBlobStorageEntry`\>

The metadata and data for the blob if it can be found.

#### Throws

Not found error if the blob cannot be found.

#### Implementation of

`IBlobStorageComponent.get`

***

### update()

> **update**(`id`, `encodingFormat`?, `fileExtension`?, `metadata`?): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

##### id

`string`

The id of the blob metadata to update.

##### encodingFormat?

`string`

Mime type for the blob, will be detected if left undefined.

##### fileExtension?

`string`

Extension for the blob, will be detected if left undefined.

##### metadata?

`IJsonLdNodeObject`

Data for the custom metadata as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Not found error if the blob cannot be found.

#### Implementation of

`IBlobStorageComponent.update`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the blob.

#### Parameters

##### id

`string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorageComponent.remove`

***

### query()

> **query**(`conditions`?, `orderBy`?, `orderByDirection`?, `cursor`?, `pageSize`?): `Promise`\<`IBlobStorageEntryList`\>

Query all the blob storage entries which match the conditions.

#### Parameters

##### conditions?

`EntityCondition`\<`IBlobStorageEntry`\>

The conditions to match for the entries.

##### orderBy?

The order for the results, defaults to created.

`"dateCreated"` | `"dateModified"`

##### orderByDirection?

`SortDirection`

The direction for the order, defaults to descending.

##### cursor?

`string`

The cursor to request the next page of entries.

##### pageSize?

`number`

The suggested number of entries to return in each chunk, in some scenarios can return a different amount.

#### Returns

`Promise`\<`IBlobStorageEntryList`\>

All the entries for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IBlobStorageComponent.query`

***

### createDownloadLink()

> **createDownloadLink**(`id`, `download`?, `filename`?): `string`

Create a download link for the blob.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

##### download?

`boolean`

Should the content disposition be set to download.

##### filename?

`string`

The filename to use for the download.

#### Returns

`string`

The download link.
