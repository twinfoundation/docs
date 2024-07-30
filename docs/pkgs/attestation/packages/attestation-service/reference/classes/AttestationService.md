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

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"attestation"`

The namespace supported by the attestation service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestation.CLASS_NAME`

## Methods

### attest()

> **attest**\<`T`\>(`controllerAddress`, `verificationMethodId`, `data`, `options`?, `requestContext`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

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

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestation.attest`

***

### verify()

> **verify**\<`T`\>(`attestationId`, `requestContext`?): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T**

#### Parameters

• **attestationId**: `string`

The attestation id to verify.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

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

> **transfer**\<`T`\>(`attestationId`, `holderControllerAddress`, `holderIdentity`, `requestContext`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **holderControllerAddress**: `string`

The new controller address of the attestation belonging to the holder.

• **holderIdentity**: `string`

The holder identity of the attestation.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The updated attestation details.

#### Implementation of

`IAttestation.transfer`
