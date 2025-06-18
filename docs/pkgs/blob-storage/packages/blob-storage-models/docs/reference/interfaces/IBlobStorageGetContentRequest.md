# Interface: IBlobStorageGetContentRequest

Request to get the content from blob storage.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the blob to get in urn format.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### disableDecryption?

> `optional` **disableDecryption**: `string`

Disables decryption if enabled by default.

##### Default

```ts
false
```

#### overrideVaultKeyId?

> `optional` **overrideVaultKeyId**: `string`

Use a different vault key id for decryption, if not provided the default vault key id will be used.

##### Default

```ts
undefined
```

#### download?

> `optional` **download**: `string`

Set the download flag which should prompt the browser to save the file.
Otherwise the browser should show the content inside the page.

##### Default

```ts
false
```

#### filename?

> `optional` **filename**: `string`

Set the filename to use when a download is triggered.
A filename will be generated if not provided.
