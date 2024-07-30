# Interface: IAttestationConnector

Interface describing an attestation connector.

## Extends

- `IService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(`systemRequestContext`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Parameters

• **systemRequestContext**: `IServiceRequestContext`

The system request context.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### attest()

> **attest**\<`T`\>(`controllerAddress`, `verificationMethodId`, `data`, `requestContext`?): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

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

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The collated attestation data.

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

> `optional` **information**: `Partial`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

***

### transfer()

> **transfer**\<`T`\>(`attestationId`, `holderControllerAddress`, `holderIdentity`, `requestContext`?): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

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

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The updated attestation details.
