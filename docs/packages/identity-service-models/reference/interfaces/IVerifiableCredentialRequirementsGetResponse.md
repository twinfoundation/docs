# Interface: IVerifiableCredentialRequirementsGetResponse

Response to get the requirements for a verifiable credential.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchDomains?` | `string` | Verifiable credential applications must match the users email domain. |
| `requiredClaims?` | [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[] | The requisites needed to apply for a verifiable credential. |
