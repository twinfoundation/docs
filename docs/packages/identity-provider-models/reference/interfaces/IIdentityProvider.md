# Interface: IIdentityProvider

Interface describing an identity provider.

## Hierarchy

- `IService`

  ↳ **`IIdentityProvider`**

## Methods

### addService

▸ **addService**(`documentId`, `documentPrivateKey`, `serviceId`, `serviceType`, `serviceEndpoint`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Add a service to the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to add the service to. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `serviceId` | `string` | The id of the service. |
| `serviceType` | `string` | The type of the service. |
| `serviceEndpoint` | `string` | The endpoint for the service. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The updated document.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### addVerificationMethod

▸ **addVerificationMethod**(`documentId`, `documentPrivateKey`, `verificationPublicKey`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to add the verification method to. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `verificationPublicKey` | `Uint8Array` | The public key for the verification method. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The updated document.

**`Throws`**

NotFoundError if the id can not be resolved.

**`Throws`**

NotSupportedError if the platform does not support multiple keys.

___

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`ILogEntry`[]\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`ILogEntry`[]\>

The response of the bootstrapping as log entries.

#### Inherited from

IService.bootstrap

___

### checkVerifiableCredential

▸ **checkVerifiableCredential**\<`T`\>(`credential`): `Promise`\<[`IDidCredentialVerification`](IDidCredentialVerification.md)\>

Check a verifiable credential is valid.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credential` | [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\> | The credential to verify. |

#### Returns

`Promise`\<[`IDidCredentialVerification`](IDidCredentialVerification.md)\>

Verification details for the credential.

___

### checkVerifiablePresentation

▸ **checkVerifiablePresentation**(`presentation`): `Promise`\<[`IDidPresentationVerification`](IDidPresentationVerification.md)\>

Verify a presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentation` | [`IDidVerifiablePresentation`](IDidVerifiablePresentation.md) | The presentation to verify. |

#### Returns

`Promise`\<[`IDidPresentationVerification`](IDidPresentationVerification.md)\>

Verification details for the presentation.

___

### createDocument

▸ **createDocument**(`documentPrivateKey`, `documentPublicKey`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Create a new document from the key pair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentPrivateKey` | `Uint8Array` | The private key to use in generating the document. |
| `documentPublicKey` | `Uint8Array` | The public key to use in generating the document. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The created document.

___

### createProof

▸ **createProof**(`documentId`, `bytes`, `verificationMethodId`, `verificationPrivateKey`): `Promise`\<\{ `type`: `string` ; `value`: `string`  }\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document signing the data. |
| `bytes` | `Uint8Array` | The data bytes to sign. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `verificationPrivateKey` | `Uint8Array` | The private key required to generate the proof. |

#### Returns

`Promise`\<\{ `type`: `string` ; `value`: `string`  }\>

The proof signature type and value.

___

### createVerifiableCredential

▸ **createVerifiableCredential**\<`T`\>(`documentId`, `credentialId`, `schemaTypes`, `subject`, `revocationIndex`, `verificationMethodId`, `verificationPrivateKey`): `Promise`\<[`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>\>

Create a verifiable credential for a verification method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document issuing the verifiable credential. |
| `credentialId` | `string` | The id of the credential. |
| `schemaTypes` | `string`[] | The type of the schemas for the data stored in the verifiable credential. |
| `subject` | `T` \| `T`[] | The subject data to store for the credential. |
| `revocationIndex` | `string` | The bitmap revocation index of the credential. |
| `verificationMethodId` | `string` | The verification method fragment to use. |
| `verificationPrivateKey` | `Uint8Array` | The private key required to generate the verifiable credential. |

#### Returns

`Promise`\<[`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>\>

The created verifiable credential.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`documentId`, `verifiableCredentials`, `presentationMethodId`, `presentationPrivateKey`, `expiresInMinutes?`): `Promise`\<[`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document creating the verifiable presentation. |
| `verifiableCredentials` | [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`unknown`\> \| [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`unknown`\>[] | The credentials to use for creating the presentation. |
| `presentationMethodId` | `string` | The method to associate with the presentation. |
| `presentationPrivateKey` | `Uint8Array` | The private key required to generate the verifiable presentation. |
| `expiresInMinutes?` | `number` | The time in minutes for the presentation to expire. |

#### Returns

`Promise`\<[`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)\>

The verifiable presentation.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### removeService

▸ **removeService**(`documentId`, `documentPrivateKey`, `serviceId`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Remove a service from the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to remove the service from. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `serviceId` | `string` | The id of the service. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The updated document.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### removeVerificationMethod

▸ **removeVerificationMethod**(`documentId`, `documentPrivateKey`, `verificationMethodFragment`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Remove a verification method from the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to remove the verification method from. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `verificationMethodFragment` | `string` | The fragment of the verification method. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The updated document.

**`Throws`**

NotFoundError if the id can not be resolved.

**`Throws`**

NotSupportedError if the platform does not support multiple revocable keys.

___

### resolveDocument

▸ **resolveDocument**(`documentId`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Resolve a document from its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to resolve. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

The resolved document.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### revokeVerifiableCredentials

▸ **revokeVerifiableCredentials**(`documentId`, `documentPrivateKey`, `credentialIndices`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Revoke verifiable credential(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to update the revocation list for. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `credentialIndices` | `number`[] | The revocation bitmap index or indices to revoke. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

Nothing.

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

### verifyProof

▸ **verifyProof**(`documentId`, `bytes`, `verificationMethodId`, `signatureType`, `signatureValue`): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document verifying the data. |
| `bytes` | `Uint8Array` | The data bytes to verify. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `signatureType` | `string` | The type of the signature for the proof. |
| `signatureValue` | `string` | The value of the signature for the proof. |

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.
