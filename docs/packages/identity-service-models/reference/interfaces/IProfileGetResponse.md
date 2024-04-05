# Interface: IProfileGetResponse

Response to get a profile.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailAddress` | `string` | The email address for the identity. |
| `imageBase64?` | `string` | The image in the profile. |
| `name?` | `string` | The name in the profile. |
| `properties?` | `IProperty`[] | Additional properties for the profile. |
| `role` | [`IdentityRole`](../enums/IdentityRole.md) | The role in the profile. |
