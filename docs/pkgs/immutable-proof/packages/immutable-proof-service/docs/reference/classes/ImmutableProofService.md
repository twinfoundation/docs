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

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IImmutableProofComponent.className`

***

### start()

> **start**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IImmutableProofComponent.start`

***

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

### removeVerifiable()

> **removeVerifiable**(`id`): `Promise`\<`void`\>

Remove the verifiable storage for the proof.

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

`IImmutableProofComponent.removeVerifiable`
