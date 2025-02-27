# Interface: IDocumentAttestation

Interface describing a document attestation.

## Properties

### @context

> **@context**: \[`"https://schema.twindev.org/documents/"`, `"https://schema.twindev.org/common/"`, `"https://schema.org"`\]

JSON-LD Context.

***

### type

> **type**: `"DocumentAttestation"`

JSON-LD Type.

***

### documentId

> **documentId**: `string`

The id of the document.

***

### documentCode

> **documentCode**: `string`

The code for the document type.

***

### documentRevision

> **documentRevision**: `number`

The revision of the document as a 0 based index.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the document was created.

***

### blobHash

> **blobHash**: `string`

The hash of the document being attested.
