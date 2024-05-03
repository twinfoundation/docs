# Interface: IIdentityListRequest

Request to get a list of identities by role.

## Properties

### query

• **query**: `Object`

The query parameters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | The cursor for paged requests. |
| `pageSize?` | `number` | Number of items to return. |
| `propertyName` | `string` | The property name to use for lookup. |
| `propertyNames?` | `string`[] | The properties to get for the profile, defaults to all. |
| `propertyValue` | `string` | The property value to use for lookup. |
