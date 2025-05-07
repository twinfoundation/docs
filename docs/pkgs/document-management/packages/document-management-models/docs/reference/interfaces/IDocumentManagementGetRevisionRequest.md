# Interface: IDocumentManagementGetRevisionRequest

Request to get a document revision from an auditable item graph vertex.

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

#### revision

> **revision**: `string`

The revision of the document to get.

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

#### extractRuleGroupId?

> `optional` **extractRuleGroupId**: `string`

If provided will extract data from the document using the specified rule group id.

#### extractMimeType?

> `optional` **extractMimeType**: `string`

By default extraction will auto detect the mime type of the document, this can be used to override the detection.
