# Class: EntityStorageAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### new EntityStorageAttestationConnector()

> **new EntityStorageAttestationConnector**(`options`?): [`EntityStorageAttestationConnector`](EntityStorageAttestationConnector.md)

Create a new instance of EntityStorageAttestationConnector.

#### Parameters

• **options?**

The dependencies for the attestation connector.

• **options.config?**: [`IEntityStorageAttestationConnectorConfig`](../interfaces/IEntityStorageAttestationConnectorConfig.md)

The configuration for the attestation connector.

#### Returns

[`EntityStorageAttestationConnector`](EntityStorageAttestationConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"entity-attestation"`

The namespace for the entities.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestationConnector.CLASS_NAME`

***

### \_config

> `private` `readonly` **\_config**: [`IEntityStorageAttestationConnectorConfig`](../interfaces/IEntityStorageAttestationConnectorConfig.md)

The configuration for the attestation connector.

## Methods

### attest()

> **attest**\<`T`\>(`controllerAddress`, `verificationMethodId`, `data`, `requestContext`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

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

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestationConnector.attest`

***

### verify()

> **verify**\<`T`\>(`attestationId`, `requestContext`?): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T** = `unknown`

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

`IAttestationConnector.verify`

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

`IAttestationConnector.transfer`
