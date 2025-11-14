# Class: DataIntegrityProofSignerVerifier

Helper methods for creating and verifying proofs.
https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022

## Implements

- [`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

## Constructors

### Constructor

> **new DataIntegrityProofSignerVerifier**(): `DataIntegrityProofSignerVerifier`

#### Returns

`DataIntegrityProofSignerVerifier`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createProof()

> **createProof**(`unsecuredDocument`, `unsignedProof`, `signKey`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof for the given data.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

The proof options.

##### signKey

`JWK`

The key to sign the proof with.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

The created proof.

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`createProof`](../interfaces/IProofSignerVerifier.md#createproof)

***

### verifyProof()

> **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data in format.

#### Parameters

##### securedDocument

`IJsonLdNodeObject`

The credential to verify.

##### signedProof

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

The proof to verify.

##### verifyKey

`JWK`

The public key to verify the proof with.

#### Returns

`Promise`\<`boolean`\>

True if the credential was verified.

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`verifyProof`](../interfaces/IProofSignerVerifier.md#verifyproof)

***

### createHash()

> **createHash**(`unsecuredDocument`, `unsignedProof`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a hash for the given data.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

The unsigned proof.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The created hash.

#### Implementation of

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md).[`createHash`](../interfaces/IProofSignerVerifier.md#createhash)
