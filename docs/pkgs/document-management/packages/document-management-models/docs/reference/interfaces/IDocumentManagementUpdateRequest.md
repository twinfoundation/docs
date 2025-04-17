# Interface: IDocumentManagementUpdateRequest

Request to update a document as an auditable item graph vertex.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### auditableItemGraphDocumentId

> **auditableItemGraphDocumentId**: `string`

The full id of the document to get.

***

### body

> **body**: `object`

The body parameters.

#### blob?

> `optional` **blob**: `string`

The data to create the document with, in base64.

#### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

Additional information to associate with the document.

#### auditableItemGraphEdges?

> `optional` **auditableItemGraphEdges**: `object`[]

The auditable item graph vertices to connect the document to.
