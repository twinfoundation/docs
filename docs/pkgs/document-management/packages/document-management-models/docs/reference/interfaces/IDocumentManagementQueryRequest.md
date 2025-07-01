# Interface: IDocumentManagementQueryRequest

Request to get a list of document from an auditable item graph vertex.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### query

> **query**: `object`

The query parameters.

#### documentId

> **documentId**: `string`

The id of the document id we are trying to find.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get the next chunk of documents.

#### pageSize?

> `optional` **pageSize**: `string` \| `number`

The number of documents to return.
