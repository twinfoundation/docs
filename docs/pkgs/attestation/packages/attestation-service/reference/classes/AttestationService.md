# Class: AttestationService

Service for performing attestation operations to a connector.

## Implements

- `IAttestation`

## Constructors

### new AttestationService()

> **new AttestationService**(`config`?): [`AttestationService`](AttestationService.md)

Create a new instance of AttestationService.

#### Parameters

• **config?**: [`IAttestationServiceConfig`](../interfaces/IAttestationServiceConfig.md)

The configuration for the service.

#### Returns

[`AttestationService`](AttestationService.md)

## Methods

### attest()

> **attest**\<`T`\>(`requestContext`, `controllerAddress`, `verificationMethodId`, `data`, `options`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **controllerAddress**: `string`

The controller address for the attestation.

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **data**: `T`

The data to attest.

• **options?**

Additional options for the attestation service.

• **options.namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to service configured namespace.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestation.attest`

***

### verify()

> **verify**\<`T`\>(`requestContext`, `attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T**

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

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

`IAttestation.verify`

***

### transfer()

> **transfer**\<`T`\>(`requestContext`, `attestationId`, `holderControllerAddress`, `holderIdentity`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **attestationId**: `string`

The attestation to transfer.

• **holderControllerAddress**: `string`

The new controller address of the attestation belonging to the holder.

• **holderIdentity**: `string`

The holder identity of the attestation.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The updated attestation details.

#### Implementation of

`IAttestation.transfer`
