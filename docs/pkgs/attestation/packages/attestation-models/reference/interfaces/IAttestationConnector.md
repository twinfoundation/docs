# Interface: IAttestationConnector

Interface describing an attestation connector.

## Extends

- `IComponent`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the component.

#### Inherited from

`IComponent.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Inherited from

`IComponent.bootstrap`

***

### start()?

> `optional` **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.start`

***

### stop()?

> `optional` **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.stop`

***

### attest()

> **attest**\<`T`\>(`controller`, `address`, `verificationMethodId`, `data`): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

Attest the data and return the collated information.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **address**: `string`

The controller address for the attestation.

• **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

• **data**: `T`

The data to attest.

#### Returns

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The collated attestation data.

***

### verify()

> **verify**\<`T`\>(`attestationId`): `Promise`\<`object`\>

Resolve and verify the attestation id.

#### Type parameters

• **T** = `unknown`

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

> `optional` **information**: `Partial`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

***

### transfer()

> **transfer**\<`T`\>(`controller`, `attestationId`, `holderIdentity`, `holderAddress`): `Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

Transfer the attestation to a new holder.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **attestationId**: `string`

The attestation to transfer.

• **holderIdentity**: `string`

The holder identity of the attestation.

• **holderAddress**: `string`

The new controller address of the attestation belonging to the holder.

#### Returns

`Promise`\<[`IAttestationInformation`](IAttestationInformation.md)\<`T`\>\>

The updated attestation details.

***

### destroy()

> **destroy**(`controller`, `attestationId`): `Promise`\<`void`\>

Destroy the attestation.

#### Parameters

• **controller**: `string`

The controller identity of the user to access the vault keys.

• **attestationId**: `string`

The attestation to destroy.

#### Returns

`Promise`\<`void`\>

Nothing.
