# Interface: IDidProof

Interface describing a did proof.
https://www.w3.org/TR/vc-data-integrity/

## Properties

### challenge?

> `optional` **challenge**: `string` \| `string`[]

Provided to mitigate replay attacks on domains.

***

### created?

> `optional` **created**: `string`

The iso date of when the proof was created.

***

### domain?

> `optional` **domain**: `string` \| `string`[]

One or more security domains in which the proof is meant to be used.

***

### expires?

> `optional` **expires**: `string`

The iso date of when the proof expires.

***

### id?

> `optional` **id**: `string`

The id of the proof.

***

### nonce?

> `optional` **nonce**: `string`

Use of this field is to increase privacy by decreasing linkability
that is the result of deterministically generated signatures.

***

### previousProof?

> `optional` **previousProof**: `string`

Identifies another data integrity proof that MUST verify before
the current proof is processed

***

### proofPurpose

> **proofPurpose**: `string`

The purpose of the proof.

***

### proofValue?

> `optional` **proofValue**: `string`

Contains the base-encoded binary data necessary to verify the
digital proof using the verificationMethod specified.

***

### type

> **type**: `string`

The type of the proof.

***

### verificationMethod?

> `optional` **verificationMethod**: `string`

The verification method of the proof.
