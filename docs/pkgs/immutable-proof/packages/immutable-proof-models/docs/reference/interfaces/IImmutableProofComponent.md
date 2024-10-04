# Interface: IImmutableProofComponent

Interface describing an immutable proof contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`proofObject`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new authentication proof.

#### Parameters

• **proofObject**: `IJsonLdNodeObject`

The object for the proof as JSON-LD.

• **userIdentity?**: `string`

The identity to create the immutable proof operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new authentication proof.

***

### get()

> **get**(`id`): `Promise`\<[`IImmutableProof`](IImmutableProof.md)\>

Get an authentication proof.

#### Parameters

• **id**: `string`

The id of the proof to get.

#### Returns

`Promise`\<[`IImmutableProof`](IImmutableProof.md)\>

The proof.

#### Throws

NotFoundError if the proof is not found.

***

### verify()

> **verify**(`id`, `proofObject`): `Promise`\<`object`\>

Verify an authentication proof.

#### Parameters

• **id**: `string`

The id of the proof to verify.

• **proofObject**: `IJsonLdNodeObject`

The object to verify as JSON-LD.

#### Returns

`Promise`\<`object`\>

The result of the verification and any failures.

##### verified

> **verified**: `boolean`

##### failure?

> `optional` **failure**: [`ImmutableProofFailure`](../type-aliases/ImmutableProofFailure.md)

#### Throws

NotFoundError if the proof is not found.

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for the proof.

#### Parameters

• **id**: `string`

The id of the proof to remove the storage from.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the proof is not found.
