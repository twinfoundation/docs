# Interface: IVerifiableCredentialCreateRequest

Create a verifiable credential.

## Properties

### data

• **data**: `Object`

The data for the request.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `claims?` | `IProperty`[] | The completed claims providing information to the verifiable credential. |
| `issuer` | `string` | The entity they want to create the verifiable credential with. |
| `subject` | `string` | The identity of the verifiable credential being created. |
| `verifiableCredentialType` | `string` | The type of verifiable credential requirements being requested. |
