# Interface: IImmutableProofComponent

Interface describing an immutable proof contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`document`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new proof.

#### Parameters

##### document

`IJsonLdNodeObject`

The document to create the proof for.

##### userIdentity?

`string`

The identity to create the immutable proof operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new proof.

***

### get()

> **get**(`id`): `Promise`\<[`IImmutableProof`](IImmutableProof.md)\>

Get a proof.

#### Parameters

##### id

`string`

The id of the proof to get.

#### Returns

`Promise`\<[`IImmutableProof`](IImmutableProof.md)\>

The proof.

#### Throws

NotFoundError if the proof is not found.

***

### verify()

> **verify**(`id`): `Promise`\<[`IImmutableProofVerification`](IImmutableProofVerification.md)\>

Verify a proof.

#### Parameters

##### id

`string`

The id of the proof to verify.

#### Returns

`Promise`\<[`IImmutableProofVerification`](IImmutableProofVerification.md)\>

The result of the verification and any failures.

#### Throws

NotFoundError if the proof is not found.

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for the proof.

#### Parameters

##### id

`string`

The id of the proof to remove the storage from.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the proof is not found.
