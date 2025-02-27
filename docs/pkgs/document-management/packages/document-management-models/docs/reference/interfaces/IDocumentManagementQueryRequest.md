# Interface: IDocumentManagementQueryRequest

Request to get a list of document from an auditable item graph vertex.

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

The id of the auditable item graph vertex which contains the documents.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### documentCodes?

> `optional` **documentCodes**: `string`

List of comma separated document codes to filter the query.

#### includeRemoved?

> `optional` **includeRemoved**: `boolean`

Include deleted documents in the response.

##### Default

```ts
false
```

#### includeMostRecentRevisions?

> `optional` **includeMostRecentRevisions**: `boolean`

Include the most recent 5 revisions, use the individual get to retrieve more.

##### Default

```ts
false
```

#### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of documents.
