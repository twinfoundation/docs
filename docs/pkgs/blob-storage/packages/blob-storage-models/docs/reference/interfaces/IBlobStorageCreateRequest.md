# Interface: IBlobStorageCreateRequest

Request to create an entry in blob storage.

## Properties

### body

> **body**: `object`

The body parameters.

#### blob

> **blob**: `string`

The data to store in base64 encoding.

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

#### compress?

> `optional` **compress**: [`BlobStorageCompressionType`](../type-aliases/BlobStorageCompressionType.md)

Optional compression type to use for the blob, defaults to no compression.

#### overrideVaultKeyId?

> `optional` **overrideVaultKeyId**: `string`

Use a different vault key id for encryption, if not provided the default vault key id will be used.

##### Default

```ts
undefined
```

#### namespace?

> `optional` **namespace**: `string`

The namespace to store the data in, defaults to component configured namespace.
