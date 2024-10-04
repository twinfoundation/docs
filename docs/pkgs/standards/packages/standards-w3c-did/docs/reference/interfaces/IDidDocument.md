# Interface: IDidDocument

Interface describing a DID Document.
Spec https://www.w3.org/TR/did-core/#did-document-properties.

## Properties

### @context?

> `optional` **@context**: `IJsonLdContextDefinitionRoot`

The context for the document.

***

### id

> **id**: `string`

The id for the document.

***

### alsoKnownAs?

> `optional` **alsoKnownAs**: `string` \| `string`[]

Aliases for the document.

***

### controller?

> `optional` **controller**: `string` \| `string`[]

The controller for the document.

***

### verificationMethod?

> `optional` **verificationMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The verification methods.

***

### authentication?

> `optional` **authentication**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The authentication methods.

***

### assertionMethod?

> `optional` **assertionMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The assertion methods.

***

### keyAgreement?

> `optional` **keyAgreement**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The key agreements.

***

### capabilityInvocation?

> `optional` **capabilityInvocation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability invocations.

***

### capabilityDelegation?

> `optional` **capabilityDelegation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability delegations.

***

### service?

> `optional` **service**: [`IDidService`](IDidService.md)[]

The services.
