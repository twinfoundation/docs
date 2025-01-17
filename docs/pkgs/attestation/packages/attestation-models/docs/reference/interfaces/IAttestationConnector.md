# Interface: IAttestationConnector

Interface describing an attestation connector.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`controller`, `address`, `verificationMethodId`, `attestationObject`): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### address

`string`

The controller address for the attestation.

##### verificationMethodId

`string`

The identity verification method to use for attesting the data.

##### attestationObject

`IJsonLdNodeObject`

The data to attest.

#### Returns

`Promise`\<`string`\>

The collated attestation data.

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

> **transfer**(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### attestationId

`string`

The attestation to transfer.

##### holderIdentity

`string`

The holder identity of the attestation.

##### holderAddress

`string`

The new controller address of the attestation belonging to the holder.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### destroy()

> **destroy**(`controller`, `attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### attestationId

`string`

The attestation to destroy.

#### Returns

`Promise`\<`void`\>

Nothing.
