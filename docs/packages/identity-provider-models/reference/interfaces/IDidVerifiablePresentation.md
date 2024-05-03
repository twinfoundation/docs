# Interface: IDidVerifiablePresentation

Interface describing a verifiable presentation.

## Properties

### @context

• **@context**: `string` \| `string`[]

The context for the verifiable credential.

___

### holder

• `Optional` **holder**: `string`

The entity generating the presentation.

___

### id

• `Optional` **id**: `string`

Provide a unique identifier for the presentation.

___

### proof

• `Optional` **proof**: [`IDidProof`](IDidProof.md)

The signature proof created by the issuer.

___

### type

• **type**: `string`[]

The types of the data stored in the verifiable credential.

___

### verifiableCredential

• **verifiableCredential**: [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`unknown`\> \| [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`unknown`\>[]

The data for the verifiable credentials.
