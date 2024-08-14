# Class: AttestationClient

Client for performing attestation through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAttestationComponent`

## Constructors

### new AttestationClient()

> **new AttestationClient**(`config`): [`AttestationClient`](AttestationClient.md)

Create a new instance of AttestationClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`AttestationClient`](AttestationClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestationComponent.CLASS_NAME`

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### attest()

> **attest**\<`T`\>(`address`, `verificationMethodId`, `data`, `options`?): `Promise`\<`IAttestationInformation`\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **address**: `string`

The controller address for the attestation.

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **data**: `T`

The data to attest.

• **options?**

Additional options for the attestation component.

• **options.namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.

#### Returns

`Promise`\<`IAttestationInformation`\<`T`\>\>

The collated attestation data.

#### Implementation of

`IAttestationComponent.attest`

***

### verify()

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T**

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

`IAttestationComponent.verify`

***

### transfer()

> **transfer**\<`T`\>(`attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`IAttestationInformation`\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

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

`IAttestationComponent.transfer`

***

### destroy()

> **destroy**(`attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

#### Returns

`Promise`\<`void`\>

The updated attestation details.

#### Implementation of

`IAttestationComponent.destroy`
