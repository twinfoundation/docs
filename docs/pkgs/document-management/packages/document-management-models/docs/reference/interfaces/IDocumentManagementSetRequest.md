# Interface: IDocumentManagementSetRequest

Request to set a document in an auditable item graph vertex.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### auditableItemGraphId

> **auditableItemGraphId**: `string`

The id of the auditable item graph vertex to store the document on.

***

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

#### createAttestation?

> `optional` **createAttestation**: `boolean`

Flag to create an attestation for the document, defaults to false

#### includeIdAsAlias?

> `optional` **includeIdAsAlias**: `boolean`

Include the document id as an alias to the aig vertex, defaults to false.

#### aliasAnnotationObject?

> `optional` **aliasAnnotationObject**: `IJsonLdNodeObject`

Additional information to associate with the alias.
