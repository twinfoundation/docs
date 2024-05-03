# Interface: IVerifiableCredentialApplicationsGetRequest

Get a list of verifiable applications.

## Properties

### identity

• **identity**: `string`

The identity to get the verifiable credentials for.

___

### query

• `Optional` **query**: `Object`

The query parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | The cursor for paged requests. |
| `identityIsIssuer?` | `boolean` | The identity is the issuer not the subject. |
| `state?` | [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md) | The state of the verifiable credential applications to get. |
