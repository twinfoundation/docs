# Class: EntityStorageIdentityConnector

Class for performing identity operations using entity storage.

## Implements

- `IIdentityConnector`

## Constructors

### Constructor

> **new EntityStorageIdentityConnector**(`options?`): `EntityStorageIdentityConnector`

Create a new instance of EntityStorageIdentityConnector.

#### Parameters

##### options?

[`IEntityStorageIdentityConnectorConstructorOptions`](../interfaces/IEntityStorageIdentityConnectorConstructorOptions.md)

The options for the identity connector.

#### Returns

`EntityStorageIdentityConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the identity connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityConnector.CLASS_NAME`

## Methods

### createDocument()

> **createDocument**(`controller`): `Promise`\<`IDidDocument`\>

Create a new document.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IDidDocument`\>

The created document.

#### Implementation of

`IIdentityConnector.createDocument`

***

### addVerificationMethod()

> **addVerificationMethod**(`controller`, `documentId`, `verificationMethodType`, `verificationMethodId?`): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### documentId

`string`

The id of the document to add the verification method to.

##### verificationMethodType

`DidVerificationMethodType`

The type of the verification method to add.

##### verificationMethodId?

`string`

The id of the verification method, if undefined uses the kid of the generated JWK.

#### Returns

`Promise`\<`IDidDocumentVerificationMethod`\>

The verification method.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple keys.

#### Implementation of

`IIdentityConnector.addVerificationMethod`

***

### removeVerificationMethod()

> **removeVerificationMethod**(`controller`, `verificationMethodId`): `Promise`\<`void`\>

Remove a verification method from the document.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### verificationMethodId

`string`

The id of the verification method.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple revocable keys.

#### Implementation of

`IIdentityConnector.removeVerificationMethod`

***

### addService()

> **addService**(`controller`, `documentId`, `serviceId`, `serviceType`, `serviceEndpoint`): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### documentId

`string`

The id of the document to add the service to.

##### serviceId

`string`

The id of the service.

##### serviceType

The type of the service.

`string` | `string`[]

##### serviceEndpoint

The endpoint for the service.

`string` | `string`[]

#### Returns

`Promise`\<`IDidService`\>

The service.

#### Throws

NotFoundError if the id can not be resolved.

#### Implementation of

`IIdentityConnector.addService`

***

### removeService()

> **removeService**(`controller`, `serviceId`): `Promise`\<`void`\>

Remove a service from the document.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### serviceId

`string`

The id of the service.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

#### Implementation of

`IIdentityConnector.removeService`

***

### createVerifiableCredential()

> **createVerifiableCredential**(`controller`, `verificationMethodId`, `id`, `subject`, `revocationIndex?`): `Promise`\<\{ `verifiableCredential`: `IDidVerifiableCredential`; `jwt`: `string`; \}\>

Create a verifiable credential for a verification method.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### verificationMethodId

`string`

The verification method id to use.

##### id

The id of the credential.

`undefined` | `string`

##### subject

`IJsonLdNodeObject`

The credential subject to store in the verifiable credential.

##### revocationIndex?

`number`

The bitmap revocation index of the credential, if undefined will not have revocation status.

#### Returns

`Promise`\<\{ `verifiableCredential`: `IDidVerifiableCredential`; `jwt`: `string`; \}\>

The created verifiable credential and its token.

#### Throws

NotFoundError if the id can not be resolved.

#### Implementation of

`IIdentityConnector.createVerifiableCredential`

***

### checkVerifiableCredential()

> **checkVerifiableCredential**(`credentialJwt`): `Promise`\<\{ `revoked`: `boolean`; `verifiableCredential`: `IDidVerifiableCredential`; \}\>

Check a verifiable credential is valid.

#### Parameters

##### credentialJwt

`string`

The credential to verify.

#### Returns

`Promise`\<\{ `revoked`: `boolean`; `verifiableCredential`: `IDidVerifiableCredential`; \}\>

The credential stored in the jwt and the revocation status.

#### Implementation of

`IIdentityConnector.checkVerifiableCredential`

***

### revokeVerifiableCredentials()

> **revokeVerifiableCredentials**(`controller`, `issuerDocumentId`, `credentialIndices`): `Promise`\<`void`\>

Revoke verifiable credential(s).

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### issuerDocumentId

`string`

The id of the document to update the revocation list for.

##### credentialIndices

`number`[]

The revocation bitmap index or indices to revoke.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityConnector.revokeVerifiableCredentials`

***

### unrevokeVerifiableCredentials()

> **unrevokeVerifiableCredentials**(`controller`, `issuerDocumentId`, `credentialIndices`): `Promise`\<`void`\>

Unrevoke verifiable credential(s).

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### issuerDocumentId

`string`

The id of the document to update the revocation list for.

##### credentialIndices

`number`[]

The revocation bitmap index or indices to un revoke.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityConnector.unrevokeVerifiableCredentials`

***

### createVerifiablePresentation()

> **createVerifiablePresentation**(`controller`, `verificationMethodId`, `presentationId`, `contexts`, `types`, `verifiableCredentials`, `expiresInMinutes?`): `Promise`\<\{ `verifiablePresentation`: `IDidVerifiablePresentation`; `jwt`: `string`; \}\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### verificationMethodId

`string`

The method to associate with the presentation.

##### presentationId

The id of the presentation.

`undefined` | `string`

##### contexts

The contexts for the data stored in the verifiable credential.

`undefined` | `IJsonLdContextDefinitionRoot`

##### types

The types for the data stored in the verifiable credential.

`undefined` | `string` | `string`[]

##### verifiableCredentials

(`string` \| `IDidVerifiableCredential`)[]

The credentials to use for creating the presentation in jwt format.

##### expiresInMinutes?

`number`

The time in minutes for the presentation to expire.

#### Returns

`Promise`\<\{ `verifiablePresentation`: `IDidVerifiablePresentation`; `jwt`: `string`; \}\>

The created verifiable presentation and its token.

#### Throws

NotFoundError if the id can not be resolved.

#### Implementation of

`IIdentityConnector.createVerifiablePresentation`

***

### checkVerifiablePresentation()

> **checkVerifiablePresentation**(`presentationJwt`): `Promise`\<\{ `revoked`: `boolean`; `verifiablePresentation`: `IDidVerifiablePresentation`; `issuers`: `IDidDocument`[]; \}\>

Check a verifiable presentation is valid.

#### Parameters

##### presentationJwt

`string`

The presentation to verify.

#### Returns

`Promise`\<\{ `revoked`: `boolean`; `verifiablePresentation`: `IDidVerifiablePresentation`; `issuers`: `IDidDocument`[]; \}\>

The presentation stored in the jwt and the revocation status.

#### Implementation of

`IIdentityConnector.checkVerifiablePresentation`

***

### createProof()

> **createProof**(`controller`, `verificationMethodId`, `proofType`, `unsecureDocument`): `Promise`\<`IProof`\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### verificationMethodId

`string`

The verification method id to use.

##### proofType

`ProofTypes`

The type of proof to create.

##### unsecureDocument

`IJsonLdNodeObject`

The unsecure document to create the proof for.

#### Returns

`Promise`\<`IProof`\>

The proof.

#### Implementation of

`IIdentityConnector.createProof`

***

### verifyProof()

> **verifyProof**(`document`, `proof`): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

##### document

`IJsonLdNodeObject`

The document to verify.

##### proof

`IProof`

The proof to verify.

#### Returns

`Promise`\<`boolean`\>

True if the proof is verified.

#### Implementation of

`IIdentityConnector.verifyProof`
