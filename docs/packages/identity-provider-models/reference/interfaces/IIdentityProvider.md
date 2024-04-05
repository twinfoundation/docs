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

▸ **checkVerifiableCredential**\<`T`\>(`credentialJwt`): `Promise`\<\{ `revoked`: `boolean` ; `verifiableCredential?`: [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>  }\>

Check a verifiable credential is valid.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentialJwt` | `string` | The credential to verify. |

#### Returns

`Promise`\<\{ `revoked`: `boolean` ; `verifiableCredential?`: [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>  }\>

The credential stored in the jwt and the revocation status.

___

### checkVerifiablePresentation

▸ **checkVerifiablePresentation**(`presentationJwt`): `Promise`\<\{ `issuers?`: [`IDidDocument`](IDidDocument.md)[] ; `revoked`: `boolean` ; `verifiablePresentation?`: [`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)  }\>

Check a verifiable presentation is valid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationJwt` | `string` | The presentation to verify. |

#### Returns

`Promise`\<\{ `issuers?`: [`IDidDocument`](IDidDocument.md)[] ; `revoked`: `boolean` ; `verifiablePresentation?`: [`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)  }\>

The presentation stored in the jwt and the revocation status.

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

▸ **createProof**(`documentId`, `verificationMethodId`, `verificationPrivateKey`, `bytes`): `Promise`\<\{ `type`: `string` ; `value`: `Uint8Array`  }\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document signing the data. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `verificationPrivateKey` | `Uint8Array` | The private key required to generate the proof. |
| `bytes` | `Uint8Array` | The data bytes to sign. |

#### Returns

`Promise`\<\{ `type`: `string` ; `value`: `Uint8Array`  }\>

The proof signature type and value.

___

### createVerifiableCredential

▸ **createVerifiableCredential**\<`T`\>(`issuerDocumentId`, `assertionMethodId`, `assertionMethodPrivateKey`, `credentialId`, `schemaTypes`, `subject`, `revocationIndex`): `Promise`\<\{ `jwt`: `string` ; `verifiableCredential`: [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>  }\>

Create a verifiable credential for a verification method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerDocumentId` | `string` | The id of the document issuing the verifiable credential. |
| `assertionMethodId` | `string` | The assertion method id to use. |
| `assertionMethodPrivateKey` | `Uint8Array` | The private key required to generate the verifiable credential. |
| `credentialId` | `string` | The id of the credential. |
| `schemaTypes` | `string`[] | The type of the schemas for the data stored in the verifiable credential. |
| `subject` | `T` \| `T`[] | The subject data to store for the credential. |
| `revocationIndex` | `number` | The bitmap revocation index of the credential. |

#### Returns

`Promise`\<\{ `jwt`: `string` ; `verifiableCredential`: [`IDidVerifiableCredential`](IDidVerifiableCredential.md)\<`T`\>  }\>

The created verifiable credential and its token.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`holderDocumentId`, `presentationMethodId`, `presentationPrivateKey`, `verifiableCredentials`, `expiresInMinutes?`): `Promise`\<\{ `jwt`: `string` ; `verifiablePresentation`: [`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)  }\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `holderDocumentId` | `string` | The id of the document creating the verifiable presentation. |
| `presentationMethodId` | `string` | The method to associate with the presentation. |
| `presentationPrivateKey` | `Uint8Array` | The private key required to generate the verifiable presentation. |
| `verifiableCredentials` | `string`[] | The credentials to use for creating the presentation in jwt format. |
| `expiresInMinutes?` | `number` | The time in minutes for the presentation to expire. |

#### Returns

`Promise`\<\{ `jwt`: `string` ; `verifiablePresentation`: [`IDidVerifiablePresentation`](IDidVerifiablePresentation.md)  }\>

The created verifiable presentation and its token.

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

▸ **removeVerificationMethod**(`documentId`, `documentPrivateKey`, `verificationMethodId`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Remove a verification method from the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document to remove the verification method from. |
| `documentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `verificationMethodId` | `string` | The id of the verification method. |

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

▸ **revokeVerifiableCredentials**(`issuerDocumentId`, `issuerDocumentPrivateKey`, `credentialIndices`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Revoke verifiable credential(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerDocumentId` | `string` | The id of the document to update the revocation list for. |
| `issuerDocumentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
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

### unrevokeVerifiableCredentials

▸ **unrevokeVerifiableCredentials**(`issuerDocumentId`, `issuerDocumentPrivateKey`, `credentialIndices`): `Promise`\<[`IDidDocument`](IDidDocument.md)\>

Unrevoke verifiable credential(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerDocumentId` | `string` | The id of the document to update the revocation list for. |
| `issuerDocumentPrivateKey` | `Uint8Array` | The private key required to sign the updated document. |
| `credentialIndices` | `number`[] | The revocation bitmap index or indices to un revoke. |

#### Returns

`Promise`\<[`IDidDocument`](IDidDocument.md)\>

Nothing.

___

### verifyProof

▸ **verifyProof**(`documentId`, `verificationMethodId`, `signatureType`, `signatureValue`, `bytes`): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `documentId` | `string` | The id of the document verifying the data. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `signatureType` | `string` | The type of the signature for the proof. |
| `signatureValue` | `Uint8Array` | The value of the signature for the proof. |
| `bytes` | `Uint8Array` | The data bytes to verify. |

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.
