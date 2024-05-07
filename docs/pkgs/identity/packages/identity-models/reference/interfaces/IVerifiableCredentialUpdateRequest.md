# Interface: IVerifiableCredentialUpdateRequest

Update a verifiable credential.

## Properties

### data

• **data**: `Object`

The request payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `rejectedCode?` | `string` | The reason for the rejection if that is the new state. |
| `state` | [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md) | The new state of the credential. |

___

### verifiableCredentialId

• **verifiableCredentialId**: `string`

The verifiable credential to update.
