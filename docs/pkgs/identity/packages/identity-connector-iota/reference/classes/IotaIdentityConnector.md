# Class: IotaIdentityConnector

Class for performing identity operations on IOTA.

## Implements

- `IIdentityConnector`

## Constructors

### new IotaIdentityConnector()

> **new IotaIdentityConnector**(`options`): [`IotaIdentityConnector`](IotaIdentityConnector.md)

Create a new instance of IotaIdentityConnector.

#### Parameters

• **options**

The options for the identity connector.

• **options.vaultConnectorType?**: `string`

The vault connector type for the private keys, defaults to "vault".

• **options.config**: [`IIotaIdentityConnectorConfig`](../interfaces/IIotaIdentityConnectorConfig.md)

The configuration to use.

#### Returns

[`IotaIdentityConnector`](IotaIdentityConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"iota"`

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

• **controller**: `string`

The controller of the identity who can make changes.

#### Returns

`Promise`\<`IDidDocument`\>

The created document.

#### Implementation of

`IIdentityConnector.createDocument`

***

### resolveDocument()

> **resolveDocument**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve a document from its id.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Implementation of

`IIdentityConnector.resolveDocument`

#### Throws

NotFoundError if the id can not be resolved.

***

### addVerificationMethod()

> **addVerificationMethod**(`controller`, `documentId`, `verificationMethodType`, `verificationMethodId`?): `Promise`\<`IDidDocumentVerificationMethod`\>

Add a verification method to the document in JSON Web key Format.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **documentId**: `string`

The id of the document to add the verification method to.

• **verificationMethodType**: `DidVerificationMethodType`

The type of the verification method to add.

• **verificationMethodId?**: `string`

The id of the verification method, if undefined uses the kid of the generated JWK.

#### Returns

`Promise`\<`IDidDocumentVerificationMethod`\>

The verification method.

#### Implementation of

`IIdentityConnector.addVerificationMethod`

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple keys.

***

### removeVerificationMethod()

> **removeVerificationMethod**(`controller`, `verificationMethodId`): `Promise`\<`void`\>

Remove a verification method from the document.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **verificationMethodId**: `string`

The id of the verification method.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityConnector.removeVerificationMethod`

#### Throws

NotFoundError if the id can not be resolved.

#### Throws

NotSupportedError if the platform does not support multiple revocable keys.

***

### addService()

> **addService**(`controller`, `documentId`, `serviceId`, `serviceType`, `serviceEndpoint`): `Promise`\<`IDidService`\>

Add a service to the document.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **documentId**: `string`

The id of the document to add the service to.

• **serviceId**: `string`

The id of the service.

• **serviceType**: `string`

The type of the service.

• **serviceEndpoint**: `string`

The endpoint for the service.

#### Returns

`Promise`\<`IDidService`\>

The service.

#### Implementation of

`IIdentityConnector.addService`

#### Throws

NotFoundError if the id can not be resolved.

***

### removeService()

> **removeService**(`controller`, `serviceId`): `Promise`\<`void`\>

Remove a service from the document.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **serviceId**: `string`

The id of the service.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityConnector.removeService`

#### Throws

NotFoundError if the id can not be resolved.

***

### createVerifiableCredential()

> **createVerifiableCredential**\<`T`\>(`controller`, `verificationMethodId`, `credentialId`, `types`, `subject`, `contexts`?, `revocationIndex`?): `Promise`\<`object`\>

Create a verifiable credential for a verification method.

#### Type parameters

• **T**

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

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

#### Returns

`Promise`\<`object`\>

The created verifiable credential and its token.

##### verifiableCredential

> **verifiableCredential**: `IDidVerifiableCredential`\<`T`\>

##### jwt

> **jwt**: `string`

#### Implementation of

`IIdentityConnector.createVerifiableCredential`

#### Throws

NotFoundError if the id can not be resolved.

***

### checkVerifiableCredential()

> **checkVerifiableCredential**\<`T`\>(`credentialJwt`): `Promise`\<`object`\>

Check a verifiable credential is valid.

#### Type parameters

• **T**

#### Parameters

• **credentialJwt**: `string`

The credential to verify.

#### Returns

`Promise`\<`object`\>

The credential stored in the jwt and the revocation status.

##### revoked

> **revoked**: `boolean`

##### verifiableCredential?

> `optional` **verifiableCredential**: `IDidVerifiableCredential`\<`T`\>

#### Implementation of

`IIdentityConnector.checkVerifiableCredential`

***

### revokeVerifiableCredentials()

> **revokeVerifiableCredentials**(`controller`, `issuerDocumentId`, `credentialIndices`): `Promise`\<`void`\>

Revoke verifiable credential(s).

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **issuerDocumentId**: `string`

The id of the document to update the revocation list for.

• **credentialIndices**: `number`[]

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

• **controller**: `string`

The controller of the identity who can make changes.

• **issuerDocumentId**: `string`

The id of the document to update the revocation list for.

• **credentialIndices**: `number`[]

The revocation bitmap index or indices to un revoke.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IIdentityConnector.unrevokeVerifiableCredentials`

***

### createVerifiablePresentation()

> **createVerifiablePresentation**(`controller`, `presentationMethodId`, `types`, `verifiableCredentials`, `contexts`?, `expiresInMinutes`?): `Promise`\<`object`\>

Create a verifiable presentation from the supplied verifiable credentials.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

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

#### Returns

`Promise`\<`object`\>

The created verifiable presentation and its token.

##### verifiablePresentation

> **verifiablePresentation**: `IDidVerifiablePresentation`

##### jwt

> **jwt**: `string`

#### Implementation of

`IIdentityConnector.createVerifiablePresentation`

#### Throws

NotFoundError if the id can not be resolved.

***

### checkVerifiablePresentation()

> **checkVerifiablePresentation**(`presentationJwt`): `Promise`\<`object`\>

Check a verifiable presentation is valid.

#### Parameters

• **presentationJwt**: `string`

The presentation to verify.

#### Returns

`Promise`\<`object`\>

The presentation stored in the jwt and the revocation status.

##### revoked

> **revoked**: `boolean`

##### verifiablePresentation?

> `optional` **verifiablePresentation**: `IDidVerifiablePresentation`

##### issuers?

> `optional` **issuers**: `IDidDocument`[]

#### Implementation of

`IIdentityConnector.checkVerifiablePresentation`

***

### createProof()

> **createProof**(`controller`, `verificationMethodId`, `bytes`): `Promise`\<`object`\>

Create a proof for arbitrary data with the specified verification method.

#### Parameters

• **controller**: `string`

The controller of the identity who can make changes.

• **verificationMethodId**: `string`

The verification method id to use.

• **bytes**: `Uint8Array`

The data bytes to sign.

#### Returns

`Promise`\<`object`\>

The proof signature type and value.

##### type

> **type**: `string`

##### value

> **value**: `Uint8Array`

#### Implementation of

`IIdentityConnector.createProof`

***

### verifyProof()

> **verifyProof**(`verificationMethodId`, `bytes`, `signatureType`, `signatureValue`): `Promise`\<`boolean`\>

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

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.

#### Implementation of

`IIdentityConnector.verifyProof`
