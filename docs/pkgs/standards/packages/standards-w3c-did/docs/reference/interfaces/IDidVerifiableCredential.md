# Interface: IDidVerifiableCredential\<T\>

Interface describing a verifiable credential.

## Type Parameters

• **T** *extends* `IJsonLdObject` = `IJsonLdObject`

## Properties

### @context

> **@context**: `IJsonLdContextDefinitionRoot`

The context for the verifiable credential.

***

### id?

> `optional` **id**: `string`

The identifier for the verifiable credential.

***

### type

> **type**: `string`[]

The types of the data stored in the verifiable credential.

***

### credentialSubject

> **credentialSubject**: `T` \| `T`[]

The data for the verifiable credential.

***

### credentialStatus?

> `optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md)

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### issuer?

> `optional` **issuer**: `string`

The issuing identity.

***

### issuanceDate?

> `optional` **issuanceDate**: `string`

The date the verifiable credential was issued.

***

### proof?

> `optional` **proof**: [`IDidProof`](IDidProof.md) \| [`IDidProof`](IDidProof.md)[]

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.
