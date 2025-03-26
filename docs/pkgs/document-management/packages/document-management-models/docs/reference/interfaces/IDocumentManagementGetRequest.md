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

#### auditableItemGraphId

> **auditableItemGraphId**: `string`

The id of the auditable item graph vertex to store the document on.

#### documentId

> **documentId**: `string`

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

#### maxRevisionCount?

> `optional` **maxRevisionCount**: `number`

Max number of revisions to return.

##### Default

```ts
0
```

#### revisionCursor?

> `optional` **revisionCursor**: `string`

The cursor to get the next chunk of revisions.
