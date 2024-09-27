# Class: AttestationService

Service for performing attestation operations to a connector.

## Implements

- `IAttestationComponent`

## Constructors

### new AttestationService()

> **new AttestationService**(`options`): [`AttestationService`](AttestationService.md)

Create a new instance of AttestationService.

#### Parameters

• **options**

The options for the service.

• **options.walletConnectorType**: `string`

The wallet connector type for generating addresses, defaults to "wallet".

• **options.config?**: [`IAttestationServiceConfig`](../interfaces/IAttestationServiceConfig.md)

The configuration for the service.

#### Returns

[`AttestationService`](AttestationService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"attestation"`

The namespace supported by the attestation service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAttestationComponent.CLASS_NAME`

## Methods

### create()

> **create**(`verificationMethodId`, `attestationObject`, `namespace`?, `identity`?, `nodeIdentity`?): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **attestationObject**: `IJsonLdNodeObject`

The data to attest.

• **namespace?**: `string`

The namespace of the connector to use for the attestation, defaults to service configured namespace.

• **identity?**: `string`

The identity to perform the attestation operation with.

• **nodeIdentity?**: `string`

The node identity to include in the attestation.

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

> **transfer**(`attestationId`, `holderIdentity`, `identity`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The identity to transfer the attestation to.

• **identity**: `string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`void`\>

The updated attestation details.

#### Implementation of

`IAttestationComponent.transfer`

***

### destroy()

> **destroy**(`attestationId`, `identity`?): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

• **attestationId**: `string`

The attestation to transfer.

• **identity?**: `string`

The identity to perform the attestation operation with.

#### Returns

`Promise`\<`void`\>

The updated attestation details.

#### Implementation of

`IAttestationComponent.destroy`
