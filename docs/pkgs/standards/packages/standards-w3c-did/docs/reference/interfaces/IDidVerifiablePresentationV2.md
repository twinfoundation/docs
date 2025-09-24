# Interface: IDidVerifiablePresentationV2

Interface describing a verifiable presentation.

## Extends

- [`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md)

## Properties

### id?

> `optional` **id**: `string`

Provide a unique identifier for the presentation.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`id`](IDidVerifiablePresentationCommon.md#id)

***

### type

> **type**: `string` \| `string`[]

The types of the data stored in the verifiable credential.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`type`](IDidVerifiablePresentationCommon.md#type)

***

### holder?

> `optional` **holder**: `string`

The entity generating the presentation.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`holder`](IDidVerifiablePresentationCommon.md#holder)

***

### proof?

> `optional` **proof**: [`IProof`](../type-aliases/IProof.md) \| [`IProof`](../type-aliases/IProof.md)[]

Proofs that the verifiable presentation is valid.
Optional if a different proof method is used, such as JWT.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`proof`](IDidVerifiablePresentationCommon.md#proof)

***

### @context

> **@context**: `"https://www.w3.org/ns/credentials/v2"` \| \[`"https://www.w3.org/ns/credentials/v2"`, `...IJsonLdContextDefinitionElement[]`\]

The context for the verifiable presentation.

***

### verifiableCredential?

> `optional` **verifiableCredential**: (`string` \| [`IDidVerifiableCredentialV2`](IDidVerifiableCredentialV2.md))[]

The data for the verifiable credentials.
