# Interface: IProfileSetRequest

Request to update a profile.

## Properties

### data

• **data**: `Object`

The data for the request.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailAddress` | `string` | The email address for the identity. |
| `imageBase64?` | `string` | The image to update the profile with. |
| `properties?` | `IProperty`[] | Additional properties for the profile. |

___

### identity

• **identity**: `string`

The identity to update the profile.
