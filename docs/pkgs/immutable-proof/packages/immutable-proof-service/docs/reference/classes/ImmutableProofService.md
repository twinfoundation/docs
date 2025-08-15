# Class: ImmutableProofService

Class for performing immutable proof operations.

## Implements

- `IImmutableProofComponent`

## Constructors

### Constructor

> **new ImmutableProofService**(`options?`): `ImmutableProofService`

Create a new instance of ImmutableProofService.

#### Parameters

##### options?

[`IImmutableProofServiceConstructorOptions`](../interfaces/IImmutableProofServiceConstructorOptions.md)

The dependencies for the immutable proof connector.

#### Returns

`ImmutableProofService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableProofComponent.CLASS_NAME`

## Methods

### create()

> **create**(`document`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`string`\>

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

#### Implementation of

`IImmutableProofComponent.create`

***

### get()

> **get**(`id`): `Promise`\<`IImmutableProof`\>

Get a proof.

#### Parameters

##### id

`string`

The id of the proof to get.

#### Returns

`Promise`\<`IImmutableProof`\>

The proof.

#### Throws

NotFoundError if the proof is not found.

#### Implementation of

`IImmutableProofComponent.get`

***

### verify()

> **verify**(`id`): `Promise`\<`IImmutableProofVerification`\>

Verify a proof.

#### Parameters

##### id

`string`

The id of the proof to verify.

#### Returns

`Promise`\<`IImmutableProofVerification`\>

The result of the verification and any failures.

#### Throws

NotFoundError if the proof is not found.

#### Implementation of

`IImmutableProofComponent.verify`

***

### removeVerifiable()

> **removeVerifiable**(`id`, `nodeIdentity?`): `Promise`\<`void`\>

Remove the verifiable storage for the proof.

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

#### Implementation of

`IImmutableProofComponent.removeVerifiable`
