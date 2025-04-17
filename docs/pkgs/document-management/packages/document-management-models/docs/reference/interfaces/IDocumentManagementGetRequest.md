# Interface: IDocumentManagementGetRequest

Request to get a document from an auditable item graph vertex.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### pathParams

> **pathParams**: `object`

The path parameters.

#### auditableItemGraphDocumentId

> **auditableItemGraphDocumentId**: `string`

The full id of the document to get.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### includeBlobStorageMetadata?

> `optional` **includeBlobStorageMetadata**: `boolean`

Include the blob storage metadata in the response.

##### Default

```ts
false
```

#### includeBlobStorageData?

> `optional` **includeBlobStorageData**: `boolean`

Include the blob storage data in the response.

##### Default

```ts
false
```

#### includeAttestation?

> `optional` **includeAttestation**: `boolean`

Include the attestation information in the response.

##### Default

```ts
false
```

#### includeRemoved?

> `optional` **includeRemoved**: `boolean`

Include deleted documents in the response.

##### Default

```ts
false
```

#### pageSize?

> `optional` **pageSize**: `string`

Page size of items to return, defaults to 1 so only most recent is returned.

##### Default

```ts
1
```

#### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of revisions.
