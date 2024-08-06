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

> `static` `readonly` **NAMESPACE**: `string` = `"iota"`

The namespace for the entities.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestationConnector.CLASS_NAME`

## Methods

### attest()

> **attest**\<`T`\>(`controller`, `address`, `verificationMethodId`, `data`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T**

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **address**: `string`

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

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T**

#### Parameters

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

> **transfer**\<`T`\>(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T**

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The holder identity of the attestation.

• **holderAddress**: `string`

The new controller address of the attestation belonging to the holder.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The updated attestation details.

#### Implementation of

`IAttestationConnector.transfer`
