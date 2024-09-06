# Interface: IBlobStorageComponent

Interface describing an blob storage component.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`blob`, `mimeType`?, `extension`?, `metadata`?, `namespace`?, `nodeIdentity`?): `Promise`\<`string`\>

Create the blob with some metadata.

#### Parameters

• **blob**: `string`

The data for the blob in base64 format.

• **mimeType?**: `string`

Mime type for the blob, will be detected if left undefined.

• **extension?**: `string`

Extension for the blob, will be detected if left undefined.

• **metadata?**: `unknown`

Data for the custom metadata as JSON-LD.

• **namespace?**: `string`

The namespace to use for storing, defaults to component configured namespace.

• **nodeIdentity?**: `string`

The node identity which controls the vault key.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

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

The data and metadata for the blob if it can be found.

##### blob?

> `optional` **blob**: `string`

##### mimeType?

> `optional` **mimeType**: `string`

##### extension?

> `optional` **extension**: `string`

##### metadata?

> `optional` **metadata**: `unknown`

#### Throws

Not found error if the blob cannot be found.

***

### update()

> **update**(`id`, `mimeType`?, `extension`?, `metadata`?): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

• **id**: `string`

The id of the blob metadata to update.

• **mimeType?**: `string`

Mime type for the blob, will be detected if left undefined.

• **extension?**: `string`

Extension for the blob, will be detected if left undefined.

• **metadata?**: `unknown`

Data for the custom metadata as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

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

#### Throws

Not found error if the blob cannot be found.
