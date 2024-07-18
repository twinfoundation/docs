# Interface: IIdentityConnector

Interface describing an identity connector.

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

> `optional` **bootstrap**(`requestContext`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### createDocument()

> **createDocument**(`controller`, `requestContext`?): `Promise`\<`IDidDocument`\>

Create a new document.

#### Parameters

• **controller**: `string`

The controller address for the document.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IDidDocument`\>

The created document.

***

### resolveDocument()

> **resolveDocument**(`documentId`, `requestContext`?): `Promise`\<`IDidDocument`\>

Resolve a document from its id.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Throws

NotFoundError if the id can not be resolved.

***

### addVerificationMethod()

> **addVerificationMethod**(`documentId`, `verificationMethodType`, `verificationMethodId`?, `requestContext`?): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

• **documentId**: `string`

The id of the document to add the verification method to.

• **verificationMethodType**: `DidVerificationMethodType`

The type of the verification method to add.

• **verificationMethodId?**: `string`

The id of the verification method, if undefined uses the kid of the generated JWK.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IDidDocumentVerificationMethod`\>

The verification method.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple keys.

***

### removeVerificationMethod()

> **removeVerificationMethod**(`verificationMethodId`, `requestContext`?): `Promise`\<`void`\>

Remove a verification method from the document.

#### Parameters

• **verificationMethodId**: `string`

The id of the verification method.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple revocable keys.

***

### addService()

> **addService**(`documentId`, `serviceId`, `serviceType`, `serviceEndpoint`, `requestContext`?): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

• **documentId**: `string`

The id of the document to add the service to.

• **serviceId**: `string`

The id of the service.

• **serviceType**: `string`

The type of the service.

• **serviceEndpoint**: `string`

The endpoint for the service.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`IDidService`\>

The service.

#### Throws

NotFoundError if the id can not be resolved.

***

### removeService()

> **removeService**(`serviceId`, `requestContext`?): `Promise`\<`void`\>

Remove a service from the document.

#### Parameters

• **serviceId**: `string`

The id of the service.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

***

### createVerifiableCredential()

> **createVerifiableCredential**\<`T`\>(`verificationMethodId`, `credentialId`, `types`, `subject`, `contexts`?, `revocationIndex`?, `requestContext`?): `Promise`\<`object`\>

Create a verifiable credential for a verification method.

#### Type parameters

• **T**

#### Parameters

• **verificationMethodId**: `string`

The verification method id to use.

• **credentialId**: `undefined` \| `string`

The id of the credential.

• **types**: `undefined` \| `string` \| `string`[]

The type for the data stored in the verifiable credential.

• **subject**: `T` \| `T`[]

The subject data to store for the credential.

• **contexts?**: `string` \| `string`[]

Additional contexts to include in the credential.

• **revocationIndex?**: `number`

The bitmap revocation index of the credential, if undefined will not have revocation status.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The created verifiable credential and its token.

##### verifiableCredential

> **verifiableCredential**: `IDidVerifiableCredential`\<`T`\>

##### jwt

> **jwt**: `string`

#### Throws

NotFoundError if the id can not be resolved.

***

### checkVerifiableCredential()

> **checkVerifiableCredential**\<`T`\>(`credentialJwt`, `requestContext`?): `Promise`\<`object`\>

Check a verifiable credential is valid.

#### Type parameters

• **T**

#### Parameters

• **credentialJwt**: `string`

The credential to verify.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The credential stored in the jwt and the revocation status.

##### revoked

> **revoked**: `boolean`

##### verifiableCredential?

> `optional` **verifiableCredential**: `IDidVerifiableCredential`\<`T`\>

***

### revokeVerifiableCredentials()

> **revokeVerifiableCredentials**(`issuerDocumentId`, `credentialIndices`, `requestContext`?): `Promise`\<`void`\>

Revoke verifiable credential(s).

#### Parameters

• **issuerDocumentId**: `string`

The id of the document to update the revocation list for.

• **credentialIndices**: `number`[]

The revocation bitmap index or indices to revoke.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### unrevokeVerifiableCredentials()

> **unrevokeVerifiableCredentials**(`issuerDocumentId`, `credentialIndices`, `requestContext`?): `Promise`\<`void`\>

Unrevoke verifiable credential(s).

#### Parameters

• **issuerDocumentId**: `string`

The id of the document to update the revocation list for.

• **credentialIndices**: `number`[]

The revocation bitmap index or indices to un revoke.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### createVerifiablePresentation()

> **createVerifiablePresentation**(`presentationMethodId`, `types`, `verifiableCredentials`, `contexts`?, `expiresInMinutes`?, `requestContext`?): `Promise`\<`object`\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

• **presentationMethodId**: `string`

The method to associate with the presentation.

• **types**: `undefined` \| `string` \| `string`[]

The types for the data stored in the verifiable credential.

• **verifiableCredentials**: `string`[]

The credentials to use for creating the presentation in jwt format.

• **contexts?**: `string` \| `string`[]

Additional contexts to include in the presentation.

• **expiresInMinutes?**: `number`

The time in minutes for the presentation to expire.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The created verifiable presentation and its token.

##### verifiablePresentation

> **verifiablePresentation**: `IDidVerifiablePresentation`

##### jwt

> **jwt**: `string`

#### Throws

NotFoundError if the id can not be resolved.

***

### checkVerifiablePresentation()

> **checkVerifiablePresentation**(`presentationJwt`, `requestContext`?): `Promise`\<`object`\>

Check a verifiable presentation is valid.

#### Parameters

• **presentationJwt**: `string`

The presentation to verify.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The presentation stored in the jwt and the revocation status.

##### revoked

> **revoked**: `boolean`

##### verifiablePresentation?

> `optional` **verifiablePresentation**: `IDidVerifiablePresentation`

##### issuers?

> `optional` **issuers**: `IDidDocument`[]

***

### createProof()

> **createProof**(`verificationMethodId`, `bytes`, `requestContext`?): `Promise`\<`object`\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

• **verificationMethodId**: `string`

The verification method id to use.

• **bytes**: `Uint8Array`

The data bytes to sign.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The proof signature type and value.

##### type

> **type**: `string`

##### value

> **value**: `Uint8Array`

***

### verifyProof()

> **verifyProof**(`verificationMethodId`, `bytes`, `signatureType`, `signatureValue`, `requestContext`?): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

• **verificationMethodId**: `string`

The verification method id to use.

• **bytes**: `Uint8Array`

The data bytes to verify.

• **signatureType**: `string`

The type of the signature for the proof.

• **signatureValue**: `Uint8Array`

The value of the signature for the proof.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.
