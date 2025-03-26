# Interface: IDocumentManagementRemoveRequest

Request to remove a document from an auditable item graph.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### auditableItemGraphId

> **auditableItemGraphId**: `string`

The id of the auditable item graph vertex to remove the document from.

#### documentId

> **documentId**: `string`

The full id of the document to remove.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### removeAllRevisions?

> `optional` **removeAllRevisions**: `boolean`

Flag to remove all revisions of the document.

##### Default

```ts
false
```
