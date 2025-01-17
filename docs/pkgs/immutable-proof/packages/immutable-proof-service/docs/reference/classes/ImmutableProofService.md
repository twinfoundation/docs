# Class: ImmutableProofService

Class for performing immutable proof operations.

## Implements

- `IImmutableProofComponent`

## Constructors

### new ImmutableProofService()

> **new ImmutableProofService**(`options`?): [`ImmutableProofService`](ImmutableProofService.md)

Create a new instance of ImmutableProofService.

#### Parameters

##### options?

[`IImmutableProofServiceConstructorOptions`](../interfaces/IImmutableProofServiceConstructorOptions.md)

The dependencies for the immutable proof connector.

#### Returns

[`ImmutableProofService`](ImmutableProofService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"immutable-proof"`

The namespace for the service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableProofComponent.CLASS_NAME`

## Methods

### create()

> **create**(`proofObject`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new authentication proof.

#### Parameters

##### proofObject

`IJsonLdNodeObject`

The object for the proof as JSON-LD.

##### userIdentity?

`string`

The identity to create the immutable proof operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new authentication proof.

#### Implementation of

`IImmutableProofComponent.create`

***

### get()

> **get**(`id`): `Promise`\<`IImmutableProof`\>

Get an authentication proof.

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

Verify an authentication proof.

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

#### Implementation of

`IImmutableProofComponent.removeImmutable`
