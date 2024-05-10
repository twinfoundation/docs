# Interface: IIdentityGetRequest

Get the profile for an identity.

## Properties

### path

• **path**: `Object`

The path parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `identity` | `string` | The identity to get the profile for. |

___

### query

• **query**: `Object`

The query parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyNames?` | `string` | The properties to get for the profile, defaults to all, should be a comma separated list. |
