# Class: OpenAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### new OpenAttestationConnector()

> **new OpenAttestationConnector**(`config`?): [`OpenAttestationConnector`](OpenAttestationConnector.md)

Create a new instance of EntityStorageAttestationConnector.

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
