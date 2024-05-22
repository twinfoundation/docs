# Interface: IAttestationConnector

Interface describing a attestation connector.

## Extends

- `IService`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext**: `IRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

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
