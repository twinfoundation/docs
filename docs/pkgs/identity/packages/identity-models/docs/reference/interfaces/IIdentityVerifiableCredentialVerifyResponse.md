# Interface: IIdentityVerifiableCredentialVerifyResponse

Response to verifying a verifiable credential.

## Properties

### body

> **body**: `object`

The response payload.

#### revoked

> **revoked**: `boolean`

Has the credential been revoked.

#### verifiableCredential?

> `optional` **verifiableCredential**: `IDidVerifiableCredential`

The verifiable credential that was verified.
