# Interface: IIdentityUpdateRequest

Request to update an identity.

## Properties

### body

• **body**: `Object`

The data for the request.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | `IProperty`[] | Properties for the identity. |

___

### path

• **path**: `Object`

The path parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `identity` | `string` | The identity to update the profile for. |
