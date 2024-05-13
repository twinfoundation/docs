# Class: OpenAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### constructor

• **new OpenAttestationConnector**(`config?`): [`OpenAttestationConnector`](OpenAttestationConnector.md)

Create a new instance of EntityStorageAttestationConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`IOpenAttestationConnectorConfig`](../interfaces/IOpenAttestationConnectorConfig.md) | The configuration for the attestation connector. |

#### Returns

[`OpenAttestationConnector`](OpenAttestationConnector.md)

## Methods

### sign

▸ **sign**(`requestContext`, `data`): `Promise`\<`IDidProof`\>

Sign the data and return the proof.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `data` | `unknown` | The data to sign. |

#### Returns

`Promise`\<`IDidProof`\>

The proof for the data with the id set as a unique identifier for the data.

#### Implementation of

IAttestationConnector.sign

___

### verify

▸ **verify**(`requestContext`, `data`, `proof`): `Promise`\<`boolean`\>

Verify the data against the proof the proof.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `data` | `unknown` | The data to verify. |
| `proof` | `IDidProof` | The proof to verify against. |

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

#### Implementation of

IAttestationConnector.verify
