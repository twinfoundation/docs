# Interface: IDidDocument

Interface describing a DID Document.
Spec https://www.w3.org/TR/did-core/#did-document-properties.

## Properties

### alsoKnownAs

• `Optional` **alsoKnownAs**: `string` \| `string`[]

Aliases for the document.

---

### assertionMethod

• `Optional` **assertionMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The assertion methods.

---

### authentication

• `Optional` **authentication**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The authentication methods.

---

### capabilityDelegation

• `Optional` **capabilityDelegation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability delegations.

---

### capabilityInvocation

• `Optional` **capabilityInvocation**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability invocations.

---

### controller

• `Optional` **controller**: `string` \| `string`[]

The controller for the document.

---

### id

• **id**: `string`

The id for the document.

---

### keyAgreement

• `Optional` **keyAgreement**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The key agreements.

---

### service

• `Optional` **service**: [`IDidService`](IDidService.md)[]

The services.

---

### verificationMethod

• `Optional` **verificationMethod**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The verification methods.
