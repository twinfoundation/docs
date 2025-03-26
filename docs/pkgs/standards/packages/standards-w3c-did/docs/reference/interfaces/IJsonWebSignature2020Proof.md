# Interface: IJsonWebSignature2020Proof

Interface describing a did proof in JSON Web Signature 2020 Format.
https://www.w3.org/TR/vc-jws-2020/

## Properties

### @context?

> `optional` **@context**: `"https://w3id.org/security/suites/jws-2020/v1"` \| \[`"https://w3id.org/security/suites/jws-2020/v1"`, `...IJsonLdContextDefinitionElement[]`\]

JSON-LD Context.

***

### type

> **type**: `"JsonWebSignature2020"`

JSON-LD Type.

***

### proofPurpose

> **proofPurpose**: `string`

The reason the proof was created.

***

### verificationMethod?

> `optional` **verificationMethod**: `string`

The verification method of the proof.

***

### created?

> `optional` **created**: `string`

The iso date of when the proof was created.

***

### jws?

> `optional` **jws**: `string`

The JSON Web Signature.
