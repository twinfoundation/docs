# Class: DocumentManagementClient

Client for performing document management through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IDocumentManagementComponent`

## Constructors

### new DocumentManagementClient()

> **new DocumentManagementClient**(`config`): [`DocumentManagementClient`](DocumentManagementClient.md)

Create a new instance of DocumentManagementClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`DocumentManagementClient`](DocumentManagementClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `DocumentManagementClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`IDocumentManagementComponent.CLASS_NAME`

## Methods

### set()

> **set**(`auditableItemGraphId`, `documentId`, `documentIdFormat`, `documentCode`, `blob`, `annotationObject`?, `createAttestation`?): `Promise`\<`string`\>

Store a document in an auditable item graph vertex and add its content to blob storage.
If the document id already exists and the blob data is different a new revision will be created.
For any other changes the current revision will be updated.

#### Parameters

##### auditableItemGraphId

`string`

The auditable item graph vertex id to create the document on.

##### documentId

`string`

The document id to create.

##### documentIdFormat

The format of the document identifier.

`undefined` | `string`

##### documentCode

`string`

The code for the document type.

##### blob

`Uint8Array`

The data to create the document.

##### annotationObject?

`IJsonLdNodeObject`

Additional information to associate with the document.

##### createAttestation?

`boolean`

Flag to create an attestation for the document, defaults to false.

#### Returns

`Promise`\<`string`\>

The identifier for the document which includes the auditable item graph identifier.

#### Implementation of

`IDocumentManagementComponent.set`

***

### get()

> **get**(`auditableItemGraphId`, `identifier`, `options`?, `revisionCursor`?): `Promise`\<`IDocument`\>

Get a specific document from an auditable item graph vertex.

#### Parameters

##### auditableItemGraphId

`string`

The auditable item graph vertex id to get the document from.

##### identifier

`string`

The identifier of the document to get.

##### options?

Additional options for the get operation.

###### includeBlobStorageMetadata?

`boolean`

Flag to include the blob storage metadata for the document, defaults to false.

###### includeBlobStorageData?

`boolean`

Flag to include the blob storage data for the document, defaults to false.

###### includeAttestation?

`boolean`

Flag to include the attestation information for the document, defaults to false.

###### includeRemoved?

`boolean`

Flag to include deleted documents, defaults to false.

###### maxRevisionCount?

`number`

Max number of revisions to return, defaults to 0.

##### revisionCursor?

`string`

The cursor to get the next chunk of revisions.

#### Returns

`Promise`\<`IDocument`\>

The documents and revisions if requested, ordered by revision descending, cursor is set if there are more document revisions.

#### Implementation of

`IDocumentManagementComponent.get`

***

### remove()

> **remove**(`auditableItemGraphId`, `identifier`, `options`?): `Promise`\<`void`\>

Remove a specific document from an auditable item graph vertex.
The documents dateDeleted will be set, but can still be queried with the includeRemoved flag.

#### Parameters

##### auditableItemGraphId

`string`

The auditable item graph vertex id to remove the document from.

##### identifier

`string`

The identifier of the document to remove.

##### options?

Additional options for the remove operation.

###### removeAllRevisions?

`boolean`

Flag to remove all revisions of the document, defaults to false.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDocumentManagementComponent.remove`

***

### query()

> **query**(`auditableItemGraphId`, `documentCodes`?, `options`?, `cursor`?): `Promise`\<`IDocumentList`\>

Query an auditable item graph vertex for documents.

#### Parameters

##### auditableItemGraphId

`string`

The auditable item graph vertex to get the documents from.

##### documentCodes?

`string`[]

The document codes to query for, if undefined gets all document codes.

##### options?

Additional options for the query operation.

###### includeMostRecentRevisions?

`boolean`

Include the most recent 5 revisions, use the individual get to retrieve more.

###### includeRemoved?

`boolean`

Flag to include deleted documents, defaults to false.

##### cursor?

`string`

The cursor to get the next chunk of documents.

#### Returns

`Promise`\<`IDocumentList`\>

The most recent revisions of each document, cursor is set if there are more documents.

#### Implementation of

`IDocumentManagementComponent.query`
