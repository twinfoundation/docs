# Class: IotaAttestationConnector

Class for performing attestation operations on IOTA network.

## Implements

- `IAttestationConnector`

## Constructors

### new IotaAttestationConnector()

> **new IotaAttestationConnector**(`options`?): [`IotaAttestationConnector`](IotaAttestationConnector.md)

Create a new instance of IotaAttestationConnector.

#### Parameters

• **options?**

The options for the class.

• **options.identityConnectorType?**: `string`

The identity connector type, defaults to "identity".

• **options.nftConnectorType?**: `string`

The nft connector type, defaults to "nft".

• **options.config?**: [`IIotaAttestationConnectorConfig`](../interfaces/IIotaAttestationConnectorConfig.md)

The configuration for the connector.

#### Returns

[`IotaAttestationConnector`](IotaAttestationConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"iota-attestation"`

The namespace for the entities.

## Methods

### attest()

> **attest**\<`T`\>(`requestContext`, `controllerAddress`, `verificationMethodId`, `data`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T**

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **controllerAddress**: `string`

The controlling address for the attestation.

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

• **T**

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **attestationId**: `string`

The attestation id to verify.

#### Returns

`Promise`\<`object`\>

The resolved attestation details.

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

• **T**

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
