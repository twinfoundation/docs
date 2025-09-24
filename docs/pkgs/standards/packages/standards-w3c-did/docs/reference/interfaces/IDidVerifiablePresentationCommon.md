# Interface: IDidVerifiablePresentationCommon

Interface describing a verifiable presentation.

## Extended by

- [`IDidVerifiablePresentationV1`](IDidVerifiablePresentationV1.md)
- [`IDidVerifiablePresentationV2`](IDidVerifiablePresentationV2.md)

## Properties

### id?

> `optional` **id**: `string`

Provide a unique identifier for the presentation.

***

### type

> **type**: `string` \| `string`[]

The types of the data stored in the verifiable credential.

***

### holder?

> `optional` **holder**: `string`

The entity generating the presentation.

***

### proof?

> `optional` **proof**: [`IProof`](../type-aliases/IProof.md) \| [`IProof`](../type-aliases/IProof.md)[]

Proofs that the verifiable presentation is valid.
Optional if a different proof method is used, such as JWT.
