# Interface: IVerifiableCredentialRequirementsGetResponse

Response to get the requirements for a verifiable credential.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `requiredClaims?` | [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[] | The requisites needed to apply for a verifiable credential. |
