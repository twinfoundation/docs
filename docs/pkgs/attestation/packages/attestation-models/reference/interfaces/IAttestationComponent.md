# Interface: IAttestationComponent

Interface describing an attestation contract.

## Extends

- `IComponent`

## Methods

### attest()

> **attest**\<`T`\>(`verificationMethodId`, `data`, `namespace`?, `identity`?, `nodeIdentity`?): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **data**: `T`

The data to attest.

• **namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.

• **identity?**: `string`

The identity to perform the attestation operation with.

• **nodeIdentity?**: `string`

The node identity to include in the attestation.

#### Returns

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The collated attestation data.

***

### verify()

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **attestationId**: `string`

The attestation id to verify.

#### Returns

`Promise`\<`object`\>

The verified attestation details.

##### verified

> **verified**: `boolean`

##### failure?

> `optional` **failure**: `string`

##### information?

> `optional` **information**: `Partial`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

***

### transfer()

> **transfer**\<`T`\>(`attestationId`, `holderIdentity`, `identity`?): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The identity to transfer the attestation to.

• **identity?**: `string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The updated attestation details.

***

### destroy()

> **destroy**(`attestationId`, `identity`?): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **identity?**: `string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`void`\>

The updated attestation details.
