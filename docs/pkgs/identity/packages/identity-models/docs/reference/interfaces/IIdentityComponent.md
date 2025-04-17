# Interface: IIdentityComponent

Interface describing a contract which provides identity operations.

## Extends

- `IComponent`

## Methods

### identityCreate()

> **identityCreate**(`namespace?`, `controller?`): `Promise`\<`IDidDocument`\>

Create a new identity.

#### Parameters

##### namespace?

`string`

The namespace of the connector to use for the identity, defaults to service configured namespace.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IDidDocument`\>

The created identity document.

***

### verificationMethodCreate()

> **verificationMethodCreate**(`identity`, `verificationMethodType`, `verificationMethodId?`, `controller?`): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

##### identity

`string`

The id of the document to add the verification method to.

##### verificationMethodType

`DidVerificationMethodType`

The type of the verification method to add.

##### verificationMethodId?

`string`

The id of the verification method, if undefined uses the kid of the generated JWK.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IDidDocumentVerificationMethod`\>

The verification method.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple keys.

***

### verificationMethodRemove()

> **verificationMethodRemove**(`verificationMethodId`, `controller?`): `Promise`\<`void`\>

Remove a verification method from the document.

#### Parameters

##### verificationMethodId

`string`

The id of the verification method.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple revocable keys.

***

### serviceCreate()

> **serviceCreate**(`identity`, `serviceId`, `serviceType`, `serviceEndpoint`, `controller?`): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

##### identity

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

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IDidService`\>

The service.

#### Throws

NotFoundError if the id can not be resolved.

***

### serviceRemove()

> **serviceRemove**(`serviceId`, `controller?`): `Promise`\<`void`\>

Remove a service from the document.

#### Parameters

##### serviceId

`string`

The id of the service.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the id can not be resolved.

***

### verifiableCredentialCreate()

> **verifiableCredentialCreate**(`verificationMethodId`, `id`, `subject`, `revocationIndex?`, `controller?`): `Promise`\<\{ `verifiableCredential`: `IDidVerifiableCredential`; `jwt`: `string`; \}\>

Create a verifiable credential for a verification method.

#### Parameters

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

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<\{ `verifiableCredential`: `IDidVerifiableCredential`; `jwt`: `string`; \}\>

The created verifiable credential and its token.

#### Throws

NotFoundError if the id can not be resolved.

***

### verifiableCredentialVerify()

> **verifiableCredentialVerify**(`credentialJwt`): `Promise`\<\{ `revoked`: `boolean`; `verifiableCredential`: `IDidVerifiableCredential`; \}\>

Verify a verifiable credential is valid.

#### Parameters

##### credentialJwt

`string`

The credential to verify.

#### Returns

`Promise`\<\{ `revoked`: `boolean`; `verifiableCredential`: `IDidVerifiableCredential`; \}\>

The credential stored in the jwt and the revocation status.

***

### verifiableCredentialRevoke()

> **verifiableCredentialRevoke**(`issuerId`, `credentialIndex`, `controller?`): `Promise`\<`void`\>

Revoke verifiable credential.

#### Parameters

##### issuerId

`string`

The id of the document to update the revocation list for.

##### credentialIndex

`number`

The revocation bitmap index revoke.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### verifiableCredentialUnrevoke()

> **verifiableCredentialUnrevoke**(`issuerId`, `credentialIndex`, `controller?`): `Promise`\<`void`\>

Unrevoke verifiable credential.

#### Parameters

##### issuerId

`string`

The id of the document to update the revocation list for.

##### credentialIndex

`number`

The revocation bitmap index to un revoke.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### verifiablePresentationCreate()

> **verifiablePresentationCreate**(`verificationMethodId`, `presentationId`, `contexts`, `types`, `verifiableCredentials`, `expiresInMinutes?`, `controller?`): `Promise`\<\{ `verifiablePresentation`: `IDidVerifiablePresentation`; `jwt`: `string`; \}\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

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

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<\{ `verifiablePresentation`: `IDidVerifiablePresentation`; `jwt`: `string`; \}\>

The created verifiable presentation and its token.

#### Throws

NotFoundError if the id can not be resolved.

***

### verifiablePresentationVerify()

> **verifiablePresentationVerify**(`presentationJwt`): `Promise`\<\{ `revoked`: `boolean`; `verifiablePresentation`: `IDidVerifiablePresentation`; `issuers`: `IDidDocument`[]; \}\>

Verify a verifiable presentation is valid.

#### Parameters

##### presentationJwt

`string`

The presentation to verify.

#### Returns

`Promise`\<\{ `revoked`: `boolean`; `verifiablePresentation`: `IDidVerifiablePresentation`; `issuers`: `IDidDocument`[]; \}\>

The presentation stored in the jwt and the revocation status.

***

### proofCreate()

> **proofCreate**(`verificationMethodId`, `proofType`, `unsecureDocument`, `controller?`): `Promise`\<`IProof`\>

Create a proof for a document with the specified verification method.

#### Parameters

##### verificationMethodId

`string`

The verification method id to use.

##### proofType

`ProofTypes`

The type of proof to create.

##### unsecureDocument

`IJsonLdNodeObject`

The unsecure document to create the proof for.

##### controller?

`string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IProof`\>

The proof.

***

### proofVerify()

> **proofVerify**(`document`, `proof`): `Promise`\<`boolean`\>

Verify proof for a document with the specified verification method.

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
