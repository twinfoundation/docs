# Class: LoggingService

Service for performing logging operations to a connector.

## Implements

- `ILogging`

## Constructors

### constructor

• **new LoggingService**(`dependencies`): [`LoggingService`](LoggingService.md)

Create a new instance of LoggingService.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The connectors to use. |
| `dependencies.loggingConnector` | `ILoggingConnector` | The logging connector. |

#### Returns

[`LoggingService`](LoggingService.md)

## Methods

### log

▸ **log**(`requestContext`, `logEntry`): `Promise`\<`undefined` \| `string`\>

Log an entry to the connector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | `ILogEntry` | The entry to log. |

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier if one was allocated during the logging process.

#### Implementation of

ILogging.log

___

### query

▸ **query**(`requestContext`, `level?`, `source?`, `timeStart?`, `timeEnd?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `ILogEntry`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Query the log entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `level?` | `LogLevel` | The level of the log entries. |
| `source?` | `string` | The source of the log entries. |
| `timeStart?` | `number` | The inclusive time as the start of the log entries. |
| `timeEnd?` | `number` | The inclusive time as the end of the log entries. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `ILogEntry`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

**`Throws`**

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

ILogging.query
