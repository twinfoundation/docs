# Interface: IOrganizationsGetResponse

Response to get a list of organizations.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | The cursor for paged requests. |
| `organizations` | \{ `identity`: `string` ; `name`: `string`  }[] | The organizations. |
