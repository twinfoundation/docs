# Interface: IAttestationProof

Interface describing an attestation proof.

## Extends

- `IDidProof`

## Properties

### id?

> `optional` **id**: `string`

The id of the proof.

#### Inherited from

`IDidProof.id`

***

### type

> **type**: `string`

The type of the proof.

#### Inherited from

`IDidProof.type`

***

### proofPurpose

> **proofPurpose**: `string`

The purpose of the proof.

#### Inherited from

`IDidProof.proofPurpose`

***

### proofValue?

> `optional` **proofValue**: `string`

Contains the base-encoded binary data necessary to verify the
digital proof using the verificationMethod specified.

#### Inherited from

`IDidProof.proofValue`

***

### verificationMethod?

> `optional` **verificationMethod**: `string`

The verification method of the proof.

#### Inherited from

`IDidProof.verificationMethod`

***

### created?

> `optional` **created**: `string`

The iso date of when the proof was created.

#### Inherited from

`IDidProof.created`

***

### expires?

> `optional` **expires**: `string`

The iso date of when the proof expires.

#### Inherited from

`IDidProof.expires`

***

### domain?

> `optional` **domain**: `string` \| `string`[]

One or more security domains in which the proof is meant to be used.

#### Inherited from

`IDidProof.domain`

***

### challenge?

> `optional` **challenge**: `string` \| `string`[]

Provided to mitigate replay attacks on domains.

#### Inherited from

`IDidProof.challenge`

***

### previousProof?

> `optional` **previousProof**: `string`

Identifies another data integrity proof that MUST verify before
the current proof is processed

#### Inherited from

`IDidProof.previousProof`

***

### nonce?

> `optional` **nonce**: `string`

Use of this field is to increase privacy by decreasing linkability
that is the result of deterministically generated signatures.

#### Inherited from

`IDidProof.nonce`

***

### blobStorageId

> **blobStorageId**: `string`

The location of the data in blob storage.
