# Interface: IDidDocument

Interface describing a DID Document.
Spec https://www.w3.org/TR/did-core/#did-document-properties.

## Properties

### alsoKnownAs

• `Optional` **alsoKnownAs**: `string` \| `string`[]

Aliases for the document.

___

### assertionMethod

• `Optional` **assertionMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The assertion methods.

___

### authentication

• `Optional` **authentication**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The authentication methods.

___

### capabilityDelegation

• `Optional` **capabilityDelegation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability delegations.

___

### capabilityInvocation

• `Optional` **capabilityInvocation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability invocations.

___

### controller

• `Optional` **controller**: `string` \| `string`[]

The controller for the document.

___

### id

• **id**: `string`

The id for the document.

___

### keyAgreement

• `Optional` **keyAgreement**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The key agreements.

___

### service

• `Optional` **service**: [`IDidService`](IDidService.md)[]

The services.

___

### verificationMethod

• `Optional` **verificationMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The verification methods.
