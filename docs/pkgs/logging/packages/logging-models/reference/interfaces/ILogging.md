# Interface: ILogging

Interface describing a logging contract.

## Hierarchy

- `IService`

  ↳ **`ILogging`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

___

### log

▸ **log**(`requestContext`, `logEntry`): `Promise`\<`undefined` \| `string`\>

Log an entry to the service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | [`ILogEntry`](ILogEntry.md) | The entry to log. |

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier if one was allocated during the logging process.

___

### query

▸ **query**(`requestContext`, `level?`, `source?`, `timeStart?`, `timeEnd?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: [`ILogEntry`](ILogEntry.md)[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Query the log entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `level?` | [`LogLevel`](../modules.md#loglevel) | The level of the log entries. |
| `source?` | `string` | The source of the log entries. |
| `timeStart?` | `number` | The inclusive time as the start of the log entries. |
| `timeEnd?` | `number` | The inclusive time as the end of the log entries. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: [`ILogEntry`](ILogEntry.md)[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

**`Throws`**

NotImplementedError if the implementation does not support retrieval.

___

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

___

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop
