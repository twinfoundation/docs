# Interface: IIdentityProofCreateRequest

Request to create a proof.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to create the proof for.

#### verificationMethodId

> **verificationMethodId**: `string`

The verification method id to use.

***

### body

> **body**: `object`

The data for the request.

#### proofType

> **proofType**: `ProofTypes`

The type of proof to create.

#### document

> **document**: `IJsonLdNodeObject`

The document to create the proof for.
