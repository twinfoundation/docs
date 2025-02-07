# Interface: IIdentityVerifiablePresentationVerifyResponse

Response to verifying a verifiable presentation.

## Properties

### body

> **body**: `object`

The response payload.

#### revoked

> **revoked**: `boolean`

Has the presentation been revoked.

#### verifiablePresentation?

> `optional` **verifiablePresentation**: `IDidVerifiablePresentation`

The verifiable presentation that was verified.

#### issuers?

> `optional` **issuers**: `IDidDocument`[]

The issuers of the presentation.
