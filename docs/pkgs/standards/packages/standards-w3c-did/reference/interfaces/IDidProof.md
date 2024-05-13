# Interface: IDidProof

Interface describing a did proof.
https://www.w3.org/TR/vc-data-integrity/

## Properties

### challenge

• `Optional` **challenge**: `string` \| `string`[]

Provided to mitigate replay attacks on domains.

___

### created

• `Optional` **created**: `string`

The iso date of when the proof was created.

___

### domain

• `Optional` **domain**: `string` \| `string`[]

One or more security domains in which the proof is meant to be used.

___

### expires

• `Optional` **expires**: `string`

The iso date of when the proof expires.

___

### id

• `Optional` **id**: `string`

The id of the proof.

___

### nonce

• `Optional` **nonce**: `string`

Use of this field is to increase privacy by decreasing linkability
that is the result of deterministically generated signatures.

___

### previousProof

• `Optional` **previousProof**: `string`

Identifies another data integrity proof that MUST verify before
the current proof is processed

___

### proofPurpose

• **proofPurpose**: `string`

The purpose of the proof.

___

### proofValue

• `Optional` **proofValue**: `string`

Contains the base-encoded binary data necessary to verify the
digital proof using the verificationMethod specified.

___

### type

• **type**: `string`

The type of the proof.

___

### verificationMethod

• `Optional` **verificationMethod**: `string`

The verification method of the proof.
