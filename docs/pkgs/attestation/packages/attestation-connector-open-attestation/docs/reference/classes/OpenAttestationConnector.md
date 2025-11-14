# Class: OpenAttestationConnector

Class for performing attestation operations in entity storage.

## Implements

- `IAttestationConnector`

## Constructors

### Constructor

> **new OpenAttestationConnector**(`options`): `OpenAttestationConnector`

Create a new instance of OpenAttestationConnector.

#### Parameters

##### options

[`IOpenAttestationConnectorConstructorOptions`](../interfaces/IOpenAttestationConnectorConstructorOptions.md)

The options for the attestation connector.

#### Returns

`OpenAttestationConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"open-attestation"`

The namespace for the entities.

***

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IAttestationConnector.className`

***

### create()

> **create**(`controller`, `verificationMethodId`, `attestationObject`): `Promise`\<`string`\>

Attest the data and return the collated information.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### verificationMethodId

`string`

The identity verification method to use for attesting the data.

##### attestationObject

`IJsonLdNodeObject`

The data to attest.

#### Returns

`Promise`\<`string`\>

The id.

#### Implementation of

`IAttestationConnector.create`

***

### get()

> **get**(`id`): `Promise`\<`IAttestationInformation`\>

Resolve and verify the attestation id.

#### Parameters

##### id

`string`

The attestation id to verify.

#### Returns

`Promise`\<`IAttestationInformation`\>

The verified attestation details.

#### Implementation of

`IAttestationConnector.get`

***

### transfer()

> **transfer**(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<`void`\>

Transfer the attestation to a new holder.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### attestationId

`string`

The attestation to transfer.

##### holderIdentity

`string`

The holder identity of the attestation.

##### holderAddress

`string`

The new controller address of the attestation belonging to the holder.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAttestationConnector.transfer`

***

### destroy()

> **destroy**(`controller`, `attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

##### controller

`string`

The controller identity of the user to access the vault keys.

##### attestationId

`string`

The attestation to destroy.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAttestationConnector.destroy`
