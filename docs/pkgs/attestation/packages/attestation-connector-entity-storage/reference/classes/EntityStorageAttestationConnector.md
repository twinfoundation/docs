# Class: EntityStorageAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### new EntityStorageAttestationConnector()

> **new EntityStorageAttestationConnector**(`dependencies`, `config`?): [`EntityStorageAttestationConnector`](EntityStorageAttestationConnector.md)

Create a new instance of EntityStorageAttestationConnector.

#### Parameters

• **dependencies**

The dependencies for the attestation connector.

• **dependencies.a**: `string`

The dependency for the attestation connector.

• **config?**: [`IEntityStorageAttestationConnectorConfig`](../interfaces/IEntityStorageAttestationConnectorConfig.md)

The configuration for the attestation connector.

#### Returns

[`EntityStorageAttestationConnector`](EntityStorageAttestationConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"entity-attestation"`

The namespace for the entities.

## Methods

### sign()

> **sign**(`requestContext`, `keyId`, `data`): `Promise`\<`IDidProof`\>

Sign the data and return the proof.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **keyId**: `string`

The key id from a vault to sign the data.

• **data**: `unknown`

The data to sign.

#### Returns

`Promise`\<`IDidProof`\>

The proof for the data with the id set as a unique identifier for the data.

#### Implementation of

`IAttestationConnector.sign`

***

### verify()

> **verify**(`requestContext`, `data`, `proof`): `Promise`\<`boolean`\>

Verify the data against the proof.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **data**: `unknown`

The data to verify.

• **proof**: `IDidProof`

The proof to verify against.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

#### Implementation of

`IAttestationConnector.verify`
