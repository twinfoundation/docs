# Class: ImmutableProofClient

Client for performing immutable proof through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IImmutableProofComponent`

## Constructors

### new ImmutableProofClient()

> **new ImmutableProofClient**(`config`): [`ImmutableProofClient`](ImmutableProofClient.md)

Create a new instance of ImmutableProofClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`ImmutableProofClient`](ImmutableProofClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableProofComponent.CLASS_NAME`

## Methods

### create()

> **create**(`document`): `Promise`\<`string`\>

Create a new proof.

#### Parameters

##### document

`IJsonLdNodeObject`

The document to create the proof for.

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

### removeImmutable()

> **removeImmutable**(`id`): `Promise`\<`void`\>

Remove the immutable storage for the proof.

#### Parameters

##### id

`string`

The id of the proof to remove the storage from.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the proof is not found.

#### Implementation of

`IImmutableProofComponent.removeImmutable`
