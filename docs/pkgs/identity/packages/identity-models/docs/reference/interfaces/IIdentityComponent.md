# Interface: IIdentityComponent

Interface describing a contract which provides identity operations.

## Extends

- `IComponent`

## Methods

### identityCreate()

> **identityCreate**(`controller`, `namespace`?): `Promise`\<`IDidDocument`\>

Create a new identity.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### namespace?

`string`

The namespace of the connector to use for the identity, defaults to service configured namespace.

#### Returns

`Promise`\<`IDidDocument`\>

The created identity document.

***

### identityResolve()

> **identityResolve**(`identity`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

##### identity

`string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

***

### verificationMethodCreate()

> **verificationMethodCreate**(`controller`, `identity`, `verificationMethodType`, `verificationMethodId`?): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### identity

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

***

### verificationMethodRemove()

> **verificationMethodRemove**(`controller`, `verificationMethodId`): `Promise`\<`void`\>

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

***

### serviceCreate()

> **serviceCreate**(`controller`, `identity`, `serviceId`, `serviceType`, `serviceEndpoint`): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### identity

`string`

The id of the document to add the service to.

##### serviceId

`string`

The id of the service.

##### serviceType

`string`

The type of the service.

##### serviceEndpoint

`string`

The endpoint for the service.

#### Returns

`Promise`\<`IDidService`\>

The service.

#### Throws

NotFoundError if the id can not be resolved.

***

### serviceRemove()

> **serviceRemove**(`controller`, `serviceId`): `Promise`\<`void`\>

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

***

### verifiableCredentialCreate()

> **verifiableCredentialCreate**(`controller`, `verificationMethodId`, `id`, `credential`, `revocationIndex`?): `Promise`\<\{ `verifiableCredential`: `IDidVerifiableCredential`; `jwt`: `string`; \}\>

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

##### credential

`IJsonLdNodeObject`

The credential to store in the verifiable credential.

##### revocationIndex?

`number`

The bitmap revocation index of the credential, if undefined will not have revocation status.

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

> **verifiableCredentialRevoke**(`controller`, `issuerId`, `credentialIndex`): `Promise`\<`void`\>

Revoke verifiable credential.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### issuerId

`string`

The id of the document to update the revocation list for.

##### credentialIndex

`number`

The revocation bitmap index revoke.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### verifiableCredentialUnrevoke()

> **verifiableCredentialUnrevoke**(`controller`, `issuerId`, `credentialIndex`): `Promise`\<`void`\>

Unrevoke verifiable credential.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### issuerId

`string`

The id of the document to update the revocation list for.

##### credentialIndex

`number`

The revocation bitmap index to un revoke.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### verifiablePresentationCreate()

> **verifiablePresentationCreate**(`controller`, `presentationMethodId`, `presentationId`, `contexts`, `types`, `verifiableCredentials`, `expiresInMinutes`?): `Promise`\<\{ `verifiablePresentation`: `IDidVerifiablePresentation`; `jwt`: `string`; \}\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### presentationMethodId

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

> **proofCreate**(`controller`, `verificationMethodId`, `bytes`): `Promise`\<`IDidProof`\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

##### controller

`string`

The controller of the identity who can make changes.

##### verificationMethodId

`string`

The verification method id to use.

##### bytes

`Uint8Array`

The data bytes to sign.

#### Returns

`Promise`\<`IDidProof`\>

The proof.

***

### proofVerify()

> **proofVerify**(`bytes`, `proof`): `Promise`\<`boolean`\>

Verify proof for arbitrary data with the specified verification method.

#### Parameters

##### bytes

`Uint8Array`

The data bytes to verify.

##### proof

`IDidProof`

The proof to verify.

#### Returns

`Promise`\<`boolean`\>

True if the proof is verified.
