# Interface: IIdentityListResponse

Response to get a list of identities.

## Properties

### body

• **body**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | An optional cursor, when defined can be used to call find to get more entities. |
| `identities` | \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] | The identities. |
| `pageSize?` | `number` | Number of entities to return. |
| `totalEntities` | `number` | Total entities length. |
