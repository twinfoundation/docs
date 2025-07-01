# Interface: IDocumentManagementCreateRequest

Request to create a document as an auditable item graph vertex.

## Properties

### body

> **body**: `object`

The body parameters.

#### documentId

> **documentId**: `string`

The document id to create.

#### documentIdFormat

> **documentIdFormat**: `undefined` \| `string`

The format of the document identifier.

#### documentCode

> **documentCode**: `string`

The code for the document type.

#### blob

> **blob**: `string`

The data to create the document with, in base64.

#### annotationObject?

> `optional` **annotationObject**: `IJsonLdNodeObject`

Additional information to associate with the document.

#### auditableItemGraphEdges?

> `optional` **auditableItemGraphEdges**: `object`[]

The auditable item graph vertices to connect the document to.

#### createAttestation?

> `optional` **createAttestation**: `boolean`

Flag to create an attestation for the document, defaults to false.

#### addAlias?

> `optional` **addAlias**: `boolean`

Flag to add the document id as an alias to the aig vertex, defaults to true.

#### aliasAnnotationObject?

> `optional` **aliasAnnotationObject**: `IJsonLdNodeObject`

Annotation object for the alias.
