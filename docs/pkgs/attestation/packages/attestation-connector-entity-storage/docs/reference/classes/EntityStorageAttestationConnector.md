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

### create()

> **create**(`controller`, `address`, `verificationMethodId`, `attestationObject`): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **address**: `string`

The controller address for the attestation.

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **attestationObject**: `IJsonLdNodeObject`

The data to attest.

#### Returns

`Promise`\<`string`\>

The id of the attestation.

#### Implementation of

`IAttestationConnector.create`

***

### get()

> **get**(`id`): `Promise`\<`IAttestationInformation`\>

Resolve and verify the attestation id.

#### Parameters

• **id**: `string`

The attestation id to verify.

#### Returns

`Promise`\<`IAttestationInformation`\>

The verified attestation details.

#### Implementation of

`IAttestationConnector.get`

***

### transfer()

> **transfer**(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

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

`Promise`\<`void`\>

Nothing.

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
