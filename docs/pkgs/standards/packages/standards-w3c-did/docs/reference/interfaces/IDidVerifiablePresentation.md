# Interface: IDidVerifiablePresentation\<T\>

Interface describing a verifiable presentation.

## Type Parameters

• **T** *extends* `IJsonLdNodeObject` = `IJsonLdNodeObject`

## Properties

### @context

> **@context**: `IJsonLdContextDefinitionRoot`

The context for the verifiable credential.

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

> **verifiableCredential**: (`string` \| [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>)[]

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
