# Interface: IAttestationComponent

Interface describing an attestation contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`attestationObject`, `namespace?`, `identity?`, `nodeIdentity?`): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

##### attestationObject

`IJsonLdNodeObject`

The data to attest.

##### namespace?

`string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.

##### identity?

`string`

The identity to perform the attestation operation with.

##### nodeIdentity?

`string`

The node identity to include in the attestation.

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

> **transfer**(`attestationId`, `holderIdentity`, `holderAddress`, `identity?`): `Promise`\<`void`\>

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

##### identity?

`string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### destroy()

> **destroy**(`attestationId`, `identity?`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

##### attestationId

`string`

The attestation to transfer.

##### identity?

`string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`void`\>

Nothing.
