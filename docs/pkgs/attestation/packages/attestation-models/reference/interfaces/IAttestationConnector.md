# Interface: IAttestationConnector

Interface describing a attestation connector.

## Hierarchy

- `IService`

  ↳ **`IAttestationConnector`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

___

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

___

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

___

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop

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
