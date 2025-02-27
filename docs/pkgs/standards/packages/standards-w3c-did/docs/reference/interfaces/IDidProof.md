# Interface: IDidProof

Interface describing a did proof.
https://www.w3.org/TR/vc-data-integrity/

## Properties

### @context?

> `optional` **@context**: `"https://w3id.org/security/data-integrity/v2"` \| \[`"https://w3id.org/security/data-integrity/v2"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `string`

JSON-LD Type.

***

### cryptosuite

> **cryptosuite**: `string`

An identifier for the cryptographic suite that can be used to verify the proof.

***

### id?

> `optional` **id**: `string`

The id of the proof.

***

### proofPurpose

> **proofPurpose**: `string`

The reason the proof was created.

***

### proofValue

> **proofValue**: `string`

Contains the base-encoded binary data necessary to verify the
digital proof using the verificationMethod specified.

***

### verificationMethod?

> `optional` **verificationMethod**: `string`

The verification method of the proof.

***

### created?

> `optional` **created**: `string`

The iso date of when the proof was created.

***

### expires?

> `optional` **expires**: `string`

The iso date of when the proof expires.

***

### domain?

> `optional` **domain**: `string` \| `string`[]

One or more security domains in which the proof is meant to be used.

***

### challenge?

> `optional` **challenge**: `string` \| `string`[]

Provided to mitigate replay attacks on domains.

***

### previousProof?

> `optional` **previousProof**: `string`

Identifies another data integrity proof that MUST verify before
the current proof is processed

***

### nonce?

> `optional` **nonce**: `string`

Use of this field is to increase privacy by decreasing linkability
that is the result of deterministically generated signatures.
