# Interface: IIdentityVerifiableCredentialRequirements

Interface representing requirements for creating for a verifiable credential.

## Properties

### identity

• **identity**: `string`

The id for the verifiable credential requirements.

___

### matchDomains

• `Optional` **matchDomains**: `string`

E-mail domain match.

___

### requiredClaims

• `Optional` **requiredClaims**: [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[]

The requirements for verifiable credential.

___

### verifiableCredentialType

• **verifiableCredentialType**: `string`

The type of the verifiable credential.
