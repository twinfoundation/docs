# Interface: IIdentityListResponse

Response to get a list of identities.

## Properties

### data

• **data**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | The cursor for paged requests. |
| `identities` | \{ `[id: string]`: `IProperty`[];  }[] | The identities. |
