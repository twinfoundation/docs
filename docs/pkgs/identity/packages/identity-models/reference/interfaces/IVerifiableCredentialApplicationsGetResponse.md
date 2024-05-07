# Interface: IVerifiableCredentialApplicationsGetResponse

The response to get verifiable credential applications request.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applications` | [`IIdentityVerifiableCredentialApplication`](IIdentityVerifiableCredentialApplication.md)[] | The verifiable credential applications. |
| `cursor?` | `string` | The cursor for paged requests. |
