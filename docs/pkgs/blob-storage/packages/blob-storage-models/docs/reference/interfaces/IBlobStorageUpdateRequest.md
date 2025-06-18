# Interface: IBlobStorageUpdateRequest

Request to update a blob entry.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the blob to get in urn format.

***

### body

> **body**: `object`

The body parameters.

#### encodingFormat?

> `optional` **encodingFormat**: `string`

The mime type of the blob, will be detected if left undefined.

#### fileExtension?

> `optional` **fileExtension**: `string`

The extension of the blob, will be detected if left undefined.

#### metadata?

> `optional` **metadata**: `IJsonLdNodeObject`

Custom metadata to associate with the blob as JSON-LD.

#### disableEncryption?

> `optional` **disableEncryption**: `boolean`

Disables encryption if enabled by default.

##### Default

```ts
false
```

#### overrideVaultKeyId?

> `optional` **overrideVaultKeyId**: `string`

Use a different vault key id for encryption, if not provided the default vault key id will be used.

##### Default

```ts
undefined
```
