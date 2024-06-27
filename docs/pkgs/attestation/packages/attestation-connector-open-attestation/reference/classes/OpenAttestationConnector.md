# Class: OpenAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### new OpenAttestationConnector()

> **new OpenAttestationConnector**(`config`?): [`OpenAttestationConnector`](OpenAttestationConnector.md)

Create a new instance of OpenAttestationConnector.

#### Parameters

• **config?**: [`IOpenAttestationConnectorConfig`](../interfaces/IOpenAttestationConnectorConfig.md)

The configuration for the attestation connector.

#### Returns

[`OpenAttestationConnector`](OpenAttestationConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"open-attestation"`

The namespace for the entities.

## Methods

### attest()

> **attest**\<`T`\>(`requestContext`, `controllerAddress`, `verificationMethodId`, `data`): `Promise`\<`IAttestationInformation`\<`T`\>\>

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

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestationConnector.attest`

***

### verify()

> **verify**\<`T`\>(`requestContext`, `attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T** = `unknown`

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

`IAttestationConnector.verify`

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

`IAttestationConnector.transfer`
