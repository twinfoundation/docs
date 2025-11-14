# Class: BlobStorageService

Service for performing blob storage operations to a connector.

## Implements

- `IBlobStorageComponent`

## Constructors

### Constructor

> **new BlobStorageService**(`options?`): `BlobStorageService`

Create a new instance of BlobStorageService.

#### Parameters

##### options?

[`IBlobStorageServiceConstructorOptions`](../interfaces/IBlobStorageServiceConstructorOptions.md)

The options for the service.

#### Returns

`BlobStorageService`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IBlobStorageComponent.className`

***

### create()

> **create**(`blob`, `encodingFormat?`, `fileExtension?`, `metadata?`, `options?`): `Promise`\<`string`\>

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

##### options?

Optional options for the creation of the blob.

###### disableEncryption?

`boolean`

Disables encryption if enabled by default.

###### overrideVaultKeyId?

`string`

Use a different vault key id for encryption, if not provided the default vault key id will be used.

###### compress?

`BlobStorageCompressionType`

Optional compression type to use for the blob, defaults to no compression.

###### namespace?

`string`

The namespace to use for storing, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageComponent.create`

***

### get()

> **get**(`id`, `options?`): `Promise`\<`IBlobStorageEntry`\>

Get the blob entry.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

##### options?

Optional options for the retrieval of the blob.

###### includeContent?

`boolean`

Include the content, or just get the metadata.

###### decompress?

`boolean`

If the content should be decompressed, if it was compressed when stored, defaults to true.

###### overrideVaultKeyId?

`string`

Use a different vault key id for decryption, if not provided the default vault key id will be used.

#### Returns

`Promise`\<`IBlobStorageEntry`\>

The entry and data for the blob if it can be found.

#### Throws

Not found error if the blob cannot be found.

#### Implementation of

`IBlobStorageComponent.get`

***

### update()

> **update**(`id`, `encodingFormat?`, `fileExtension?`, `metadata?`): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

##### id

`string`

The id of the blob entry to update.

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

> **query**(`conditions?`, `orderBy?`, `orderByDirection?`, `cursor?`, `limit?`): `Promise`\<`IBlobStorageEntryList`\>

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

##### limit?

`number`

The suggested number of entries to return in each chunk, in some scenarios can return a different amount.

#### Returns

`Promise`\<`IBlobStorageEntryList`\>

All the entries for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Implementation of

`IBlobStorageComponent.query`
