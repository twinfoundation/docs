# Class: AttestationService

Service for performing attestation operations to a connector.

## Implements

- `IAttestationComponent`

## Constructors

### new AttestationService()

> **new AttestationService**(`options`): [`AttestationService`](AttestationService.md)

Create a new instance of AttestationService.

#### Parameters

• **options**

The options for the service.

• **options.walletConnectorType**: `string`

The wallet connector type for generating addresses, defaults to "wallet".

• **options.config?**: [`IAttestationServiceConfig`](../interfaces/IAttestationServiceConfig.md)

The configuration for the service.

#### Returns

[`AttestationService`](AttestationService.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"attestation"`

The namespace supported by the attestation service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestationComponent.CLASS_NAME`

## Methods

### attest()

> **attest**\<`T`\>(`verificationMethodId`, `data`, `namespace`?, `identity`?, `nodeIdentity`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **data**: `T`

The data to attest.

• **namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to service configured namespace.

• **identity?**: `string`

The identity to perform the attestation operation with.

• **nodeIdentity?**: `string`

The node identity to include in the attestation.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestationComponent.attest`

***

### verify()

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T**

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

> `optional` **information**: `Partial`\<`IAttestationInformation`\<`T`\>\>

#### Implementation of

`IAttestationComponent.verify`

***

### transfer()

> **transfer**\<`T`\>(`attestationId`, `holderIdentity`, `identity`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The identity to transfer the attestation to.

• **identity**: `string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The updated attestation details.

#### Implementation of

`IAttestationComponent.transfer`

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

#### Implementation of

`IAttestationComponent.destroy`
