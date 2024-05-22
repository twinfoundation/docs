# Class: AttestationClient

Client for performing attestation through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAttestation`

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

> **fetch**\<`T`, `U`\>(`requestContext`, `route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`unknown`\>

• **U** *extends* `IHttpResponse`\<`unknown`\>

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **route**: `string`

The route of the request.

• **method**: `HttpMethods`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### sign()

> **sign**(`requestContext`, `keyId`, `data`, `options`?): `Promise`\<`IAttestationProof`\>

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

`Promise`\<`IAttestationProof`\>

The proof for the data with the id set as a unique identifier for the data.

#### Implementation of

`IAttestation.sign`

***

### verify()

> **verify**(`requestContext`, `proof`): `Promise`\<`boolean`\>

Verify the data against the proof.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **proof**: `IAttestationProof`

The proof to verify against.

#### Returns

`Promise`\<`boolean`\>

True if the verification is successful.

#### Implementation of

`IAttestation.verify`
