# Interface: IDidVerifiablePresentation

Interface describing a verifiable presentation.

## Properties

### @context

> **@context**: `"https://www.w3.org/ns/credentials/v2"` \| \[`"https://www.w3.org/ns/credentials/v2"`, `...string[]`\]

The context for the verifiable presentation.

***

### id?

> `optional` **id**: `string`

Provide a unique identifier for the presentation.

***

### type

> **type**: `string`[]

The types of the data stored in the verifiable credential.

***

### verifiableCredential

> **verifiableCredential**: (`string` \| [`IDidVerifiableCredential`](IDidVerifiableCredential.md))[]

The data for the verifiable credentials.

***

### holder?

> `optional` **holder**: `string`

The entity generating the presentation.

***

### proof?

> `optional` **proof**: [`IDidProof`](IDidProof.md) \| [`IDidProof`](IDidProof.md)[]

Proofs that the verifiable presentation is valid.
Optional if a different proof method is used, such as JWT.
