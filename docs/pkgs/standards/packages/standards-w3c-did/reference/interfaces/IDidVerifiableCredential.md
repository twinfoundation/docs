# Interface: IDidVerifiableCredential\<T\>

Interface describing a verifiable credential.

## Type parameters

• **T** = `unknown`

## Properties

### @context

> **@context**: `string` \| `string`[]

The context for the verifiable credential.

***

### credentialStatus?

> `optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md)

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### credentialSubject

> **credentialSubject**: `T` \| `T`[]

The data for the verifiable credential.

***

### id

> **id**: `string`

The identifier for the verifiable credential.

***

### issuanceDate

> **issuanceDate**: `string`

The date the verifiable credential was issued.

***

### issuer

> **issuer**: `string`

The issuing identity.

***

### proof?

> `optional` **proof**: [`IDidProof`](IDidProof.md) \| [`IDidProof`](IDidProof.md)[]

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.

***

### type

> **type**: `string`[]

The types of the data stored in the verifiable credential.
