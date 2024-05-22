# Interface: IDidDocument

Interface describing a DID Document.
Spec https://www.w3.org/TR/did-core/#did-document-properties.

## Properties

### alsoKnownAs?

> `optional` **alsoKnownAs**: `string` \| `string`[]

Aliases for the document.

***

### assertionMethod?

> `optional` **assertionMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The assertion methods.

***

### authentication?

> `optional` **authentication**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The authentication methods.

***

### capabilityDelegation?

> `optional` **capabilityDelegation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability delegations.

***

### capabilityInvocation?

> `optional` **capabilityInvocation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability invocations.

***

### controller?

> `optional` **controller**: `string` \| `string`[]

The controller for the document.

***

### id

> **id**: `string`

The id for the document.

***

### keyAgreement?

> `optional` **keyAgreement**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The key agreements.

***

### service?

> `optional` **service**: [`IDidService`](IDidService.md)[]

The services.

***

### verificationMethod?

> `optional` **verificationMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The verification methods.
