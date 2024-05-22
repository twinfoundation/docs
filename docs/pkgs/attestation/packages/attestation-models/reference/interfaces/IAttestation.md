# Interface: IAttestation

Interface describing an attestation contract.

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

> **sign**(`requestContext`, `keyId`, `data`, `options`?): `Promise`\<[`IAttestationProof`](IAttestationProof.md)\>

Sign the data and return the proof.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **keyId**: `string`

The key id from a vault to sign the data.

• **data**: `string`

The data to store in blob storage and sign as base64.

• **options?**

Additional options for the attestation service.

• **options.namespace?**: `string`

The namespace to use for storing, defaults to service configured namespace.

#### Returns

`Promise`\<[`IAttestationProof`](IAttestationProof.md)\>

The proof for the data with the id set as a unique identifier for the data.

***

### verify()

> **verify**(`requestContext`, `proof`): `Promise`\<`boolean`\>

Verify the a proof using the data in blob storage.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **proof**: [`IAttestationProof`](IAttestationProof.md)

The proof to verify against.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.
