# @gtsc/standards-w3c-did

## Interfaces

- [IDidCredentialStatus](interfaces/IDidCredentialStatus.md)
- [IDidDocument](interfaces/IDidDocument.md)
- [IDidDocumentVerificationMethod](interfaces/IDidDocumentVerificationMethod.md)
- [IDidPresentationVerification](interfaces/IDidPresentationVerification.md)
- [IDidService](interfaces/IDidService.md)
- [IDidVerifiableCredential](interfaces/IDidVerifiableCredential.md)
- [IDidVerifiablePresentation](interfaces/IDidVerifiablePresentation.md)

## Type Aliases

### DidVerificationMethodType

Ƭ **DidVerificationMethodType**: keyof `Pick`\<[`IDidDocument`](interfaces/IDidDocument.md), `"verificationMethod"` \| `"authentication"` \| `"assertionMethod"` \| `"keyAgreement"` \| `"capabilityInvocation"` \| `"capabilityDelegation"`\>

The types of verification method.
