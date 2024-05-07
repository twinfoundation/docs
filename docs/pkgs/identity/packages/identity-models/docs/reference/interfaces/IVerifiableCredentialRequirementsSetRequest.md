# Interface: IVerifiableCredentialRequirementsSetRequest

Request to set the requirements for a verifiable credential.

## Properties

### data

• **data**: `Object`

The request payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `requiredClaims?` | [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[] | The requisites needed to apply for a verifiable credential. |

___

### identity

• **identity**: `string`

The identity of the verifiable credential requirements.

___

### verifiableCredentialType

• **verifiableCredentialType**: `string`

The type of verifiable credential requirements being stored.
