# Interface: IAttestationComponent

Interface describing an attestation contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`attestationObject`, `namespace?`): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

##### attestationObject

`IJsonLdNodeObject`

The data to attest.

##### namespace?

`string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the attestation.

***

### get()

> **get**(`id`): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\>

Resolve and verify the attestation id.

#### Parameters

##### id

`string`

The attestation id to verify.

#### Returns

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\>

The verified attestation details.

***

### transfer()

> **transfer**(`attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

#### Parameters

##### attestationId

`string`

The attestation to transfer.

##### holderIdentity

`string`

The identity to transfer the attestation to.

##### holderAddress

`string`

The address to transfer the attestation to.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### destroy()

> **destroy**(`attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

##### attestationId

`string`

The attestation to transfer.

#### Returns

`Promise`\<`void`\>

Nothing.
