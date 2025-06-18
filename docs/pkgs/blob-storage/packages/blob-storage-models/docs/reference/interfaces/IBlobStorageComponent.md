# Interface: IBlobStorageComponent

Interface describing an blob storage component.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`blob`, `encodingFormat?`, `fileExtension?`, `metadata?`, `options?`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`string`\>

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

###### namespace?

`string`

The namespace to use for storing, defaults to component configured namespace.

##### userIdentity?

`string`

The user identity to use with storage operations.

##### nodeIdentity?

`string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

***

### get()

> **get**(`id`, `options?`, `userIdentity?`, `nodeIdentity?`): `Promise`\<[`IBlobStorageEntry`](IBlobStorageEntry.md)\>

Get the blob and metadata.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

##### options?

Optional options for the retrieval of the blob.

###### includeContent?

`boolean`

Include the content, or just get the metadata.

###### disableDecryption?

`boolean`

Disables decryption if enabled by default.

###### overrideVaultKeyId?

`string`

Use a different vault key id for decryption, if not provided the default vault key id will be used.

##### userIdentity?

`string`

The user identity to use with storage operations.

##### nodeIdentity?

`string`

The node identity to use with storage operations.

#### Returns

`Promise`\<[`IBlobStorageEntry`](IBlobStorageEntry.md)\>

The data and metadata for the blob if it can be found.

#### Throws

Not found error if the blob cannot be found.

***

### update()

> **update**(`id`, `encodingFormat?`, `fileExtension?`, `metadata?`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

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

##### userIdentity?

`string`

The user identity to use with storage operations.

##### nodeIdentity?

`string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Not found error if the blob cannot be found.

***

### remove()

> **remove**(`id`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Remove the blob.

#### Parameters

##### id

`string`

The id of the blob to remove in urn format.

##### userIdentity?

`string`

The user identity to use with storage operations.

##### nodeIdentity?

`string`

The node identity to use with storage operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

Not found error if the blob cannot be found.

***

### query()

> **query**(`conditions?`, `orderBy?`, `orderByDirection?`, `cursor?`, `pageSize?`, `userIdentity?`, `nodeIdentity?`): `Promise`\<[`IBlobStorageEntryList`](IBlobStorageEntryList.md)\>

Query all the blob storage entries which match the conditions.

#### Parameters

##### conditions?

`EntityCondition`\<[`IBlobStorageEntry`](IBlobStorageEntry.md)\>

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

##### userIdentity?

`string`

The user identity to use with storage operations.

##### nodeIdentity?

`string`

The node identity to use with storage operations.

#### Returns

`Promise`\<[`IBlobStorageEntryList`](IBlobStorageEntryList.md)\>

All the entries for the storage matching the conditions,
and a cursor which can be used to request more entities.
