# Interface: IIdentityConnector

Interface describing an identity connector.

## Hierarchy

- `IService`

  ↳ **`IIdentityConnector`**

## Methods

### addService

▸ **addService**(`requestContext`, `documentId`, `serviceId`, `serviceType`, `serviceEndpoint`): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document to add the service to. |
| `serviceId` | `string` | The id of the service. |
| `serviceType` | `string` | The type of the service. |
| `serviceEndpoint` | `string` | The endpoint for the service. |

#### Returns

`Promise`\<`IDidService`\>

The service.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### addVerificationMethod

▸ **addVerificationMethod**(`requestContext`, `documentId`, `verificationMethodType`, `verificationMethodId?`): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document to add the verification method to. |
| `verificationMethodType` | ``"verificationMethod"`` \| ``"authentication"`` \| ``"assertionMethod"`` \| ``"keyAgreement"`` \| ``"capabilityInvocation"`` \| ``"capabilityDelegation"`` | The type of the verification method to add. |
| `verificationMethodId?` | `string` | The id of the verification method, if undefined uses the kid of the generated JWK. |

#### Returns

`Promise`\<`IDidDocumentVerificationMethod`\>

The verification method.

**`Throws`**

NotFoundError if the id can not be resolved.

**`Throws`**

NotSupportedError if the platform does not support multiple keys.

___

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

___

### checkVerifiableCredential

▸ **checkVerifiableCredential**\<`T`\>(`requestContext`, `credentialJwt`): `Promise`\<\{ `revoked`: `boolean` ; `verifiableCredential?`: `IDidVerifiableCredential`\<`T`\>  }\>

Check a verifiable credential is valid.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `credentialJwt` | `string` | The credential to verify. |

#### Returns

`Promise`\<\{ `revoked`: `boolean` ; `verifiableCredential?`: `IDidVerifiableCredential`\<`T`\>  }\>

The credential stored in the jwt and the revocation status.

___

### checkVerifiablePresentation

▸ **checkVerifiablePresentation**(`requestContext`, `presentationJwt`): `Promise`\<\{ `issuers?`: `IDidDocument`[] ; `revoked`: `boolean` ; `verifiablePresentation?`: `IDidVerifiablePresentation`  }\>

Check a verifiable presentation is valid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `presentationJwt` | `string` | The presentation to verify. |

#### Returns

`Promise`\<\{ `issuers?`: `IDidDocument`[] ; `revoked`: `boolean` ; `verifiablePresentation?`: `IDidVerifiablePresentation`  }\>

The presentation stored in the jwt and the revocation status.

___

### createDocument

▸ **createDocument**(`requestContext`, `privateKey?`, `publicKey?`): `Promise`\<`IDidDocument`\>

Create a new document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `privateKey?` | `string` | The private key to use for the document in base64, if undefined a new key will be generated. |
| `publicKey?` | `string` | The public key to use for the document in base64, must be provided if privateKey is supplied. |

#### Returns

`Promise`\<`IDidDocument`\>

The created document.

___

### createProof

▸ **createProof**(`requestContext`, `documentId`, `verificationMethodId`, `bytes`): `Promise`\<\{ `type`: `string` ; `value`: `string`  }\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document signing the data. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `bytes` | `string` | The data bytes to sign in base64. |

#### Returns

`Promise`\<\{ `type`: `string` ; `value`: `string`  }\>

The proof signature type and value in base64.

___

### createVerifiableCredential

▸ **createVerifiableCredential**\<`T`\>(`requestContext`, `issuerDocumentId`, `verificationMethodId`, `credentialId`, `schemaTypes`, `subject`, `revocationIndex`): `Promise`\<\{ `jwt`: `string` ; `verifiableCredential`: `IDidVerifiableCredential`\<`T`\>  }\>

Create a verifiable credential for a verification method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `issuerDocumentId` | `string` | The id of the document issuing the verifiable credential. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `credentialId` | `string` | The id of the credential. |
| `schemaTypes` | `string` \| `string`[] | The type of the schemas for the data stored in the verifiable credential. |
| `subject` | `T` \| `T`[] | The subject data to store for the credential. |
| `revocationIndex` | `number` | The bitmap revocation index of the credential. |

#### Returns

`Promise`\<\{ `jwt`: `string` ; `verifiableCredential`: `IDidVerifiableCredential`\<`T`\>  }\>

The created verifiable credential and its token.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`requestContext`, `holderDocumentId`, `presentationMethodId`, `schemaTypes`, `verifiableCredentials`, `expiresInMinutes?`): `Promise`\<\{ `jwt`: `string` ; `verifiablePresentation`: `IDidVerifiablePresentation`  }\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `holderDocumentId` | `string` | The id of the document creating the verifiable presentation. |
| `presentationMethodId` | `string` | The method to associate with the presentation. |
| `schemaTypes` | `string` \| `string`[] | The type of the schemas for the data stored in the verifiable credential. |
| `verifiableCredentials` | `string`[] | The credentials to use for creating the presentation in jwt format. |
| `expiresInMinutes?` | `number` | The time in minutes for the presentation to expire. |

#### Returns

`Promise`\<\{ `jwt`: `string` ; `verifiablePresentation`: `IDidVerifiablePresentation`  }\>

The created verifiable presentation and its token.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### removeService

▸ **removeService**(`requestContext`, `documentId`, `serviceId`): `Promise`\<`void`\>

Remove a service from the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document to remove the service from. |
| `serviceId` | `string` | The id of the service. |

#### Returns

`Promise`\<`void`\>

Nothing.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### removeVerificationMethod

▸ **removeVerificationMethod**(`requestContext`, `documentId`, `verificationMethodId`): `Promise`\<`void`\>

Remove a verification method from the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document to remove the verification method from. |
| `verificationMethodId` | `string` | The id of the verification method. |

#### Returns

`Promise`\<`void`\>

Nothing.

**`Throws`**

NotFoundError if the id can not be resolved.

**`Throws`**

NotSupportedError if the platform does not support multiple revocable keys.

___

### resolveDocument

▸ **resolveDocument**(`requestContext`, `documentId`): `Promise`\<`IDidDocument`\>

Resolve a document from its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document to resolve. |

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

**`Throws`**

NotFoundError if the id can not be resolved.

___

### revokeVerifiableCredentials

▸ **revokeVerifiableCredentials**(`requestContext`, `issuerDocumentId`, `credentialIndices`): `Promise`\<`void`\>

Revoke verifiable credential(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `issuerDocumentId` | `string` | The id of the document to update the revocation list for. |
| `credentialIndices` | `number`[] | The revocation bitmap index or indices to revoke. |

#### Returns

`Promise`\<`void`\>

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

▸ **unrevokeVerifiableCredentials**(`requestContext`, `issuerDocumentId`, `credentialIndices`): `Promise`\<`void`\>

Unrevoke verifiable credential(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `issuerDocumentId` | `string` | The id of the document to update the revocation list for. |
| `credentialIndices` | `number`[] | The revocation bitmap index or indices to un revoke. |

#### Returns

`Promise`\<`void`\>

Nothing.

___

### verifyProof

▸ **verifyProof**(`requestContext`, `documentId`, `verificationMethodId`, `bytes`, `signatureType`, `signatureValue`): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `documentId` | `string` | The id of the document verifying the data. |
| `verificationMethodId` | `string` | The verification method id to use. |
| `bytes` | `string` | The data bytes to verify in base64. |
| `signatureType` | `string` | The type of the signature for the proof. |
| `signatureValue` | `string` | The value of the signature for the proof in base64. |

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.
