# Interface: ILoggingListResponse

Response for log entry list request.

## Properties

### body

• **body**: `Object`

The response payload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cursor?` | `string` | An optional cursor, when defined can be used to call find to get more entities. |
| `entities` | [`ILogEntry`](ILogEntry.md)[] | The entities, which can be partial if a limited keys list was provided. |
| `pageSize?` | `number` | Number of entities to return. |
| `totalEntities` | `number` | Total entities length. |
