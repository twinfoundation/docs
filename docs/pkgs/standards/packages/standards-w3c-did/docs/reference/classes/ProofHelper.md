# Class: ProofHelper

Helper methods for creating and verifying proofs.

## Constructors

### new ProofHelper()

> **new ProofHelper**(): [`ProofHelper`](ProofHelper.md)

#### Returns

[`ProofHelper`](ProofHelper.md)

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createSignerVerifier()

> `static` **createSignerVerifier**(`proofType`): [`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

Create a signer verifier.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

#### Returns

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

The created signer verifier.

#### Throws

GeneralError if the proof type is not supported.

***

### createProof()

> `static` **createProof**(`proofType`, `unsecuredDocument`, `unsignedProof`, `signKey`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof for the given data.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IProof`](../type-aliases/IProof.md)

The proof options.

##### signKey

`IJwk`

The key to sign the proof with.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

The created proof.

***

### verifyProof()

> `static` **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data.

#### Parameters

##### securedDocument

`IJsonLdNodeObject`

The credential to verify.

##### signedProof

[`IProof`](../type-aliases/IProof.md)

The proof to verify.

##### verifyKey

`IJwk`

The public key to verify the proof with.

#### Returns

`Promise`\<`boolean`\>

True if the credential was verified.

***

### createUnsignedProof()

> `static` **createUnsignedProof**(`proofType`, `verificationMethodId`, `otherParams`?): [`IProof`](../type-aliases/IProof.md)

Create an unsigned proof.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### verificationMethodId

`string`

The verification method id.

##### otherParams?

`any`

Other parameters for the proof.

#### Returns

[`IProof`](../type-aliases/IProof.md)

The created proof.

#### Throws

GeneralError if the proof type is not supported.
