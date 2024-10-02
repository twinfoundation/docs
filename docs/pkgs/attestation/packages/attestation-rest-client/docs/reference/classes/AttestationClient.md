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

### create()

> **create**(`verificationMethodId`, `attestationObject`, `namespace`?): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **attestationObject**: `IJsonLdNodeObject`

The data to attest.

• **namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id.

#### Implementation of

`IAttestationComponent.create`

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

`IAttestationComponent.get`

***

### transfer()

> **transfer**(`attestationId`, `holderIdentity`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The identity to transfer the attestation to.

#### Returns

`Promise`\<`void`\>

Nothing.

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
