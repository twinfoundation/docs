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

• **options.identityConnectorType?**: `string`

The type of the identity connector, defaults to "identity".

• **options.nftConnectorType?**: `string`

The type of the nft connector, defaults to "nft".

• **options.config?**: [`IEntityStorageAttestationConnectorConfig`](../interfaces/IEntityStorageAttestationConnectorConfig.md)

The configuration for the connector.

#### Returns

[`EntityStorageAttestationConnector`](EntityStorageAttestationConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

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

#### Type Parameters

• **T** *extends* `IJsonLdNodeObject`

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **address**: `string`

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

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type Parameters

• **T** *extends* `IJsonLdNodeObject`

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

`IAttestationConnector.verify`

***

### transfer()

> **transfer**\<`T`\>(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type Parameters

• **T** *extends* `IJsonLdNodeObject`

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

***

### destroy()

> **destroy**(`controller`, `attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **attestationId**: `string`

The attestation to destroy.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAttestationConnector.destroy`
