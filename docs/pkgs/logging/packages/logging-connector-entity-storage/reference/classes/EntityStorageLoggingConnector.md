# Class: EntityStorageLoggingConnector

Class for performing logging operations in entity storage.

## Implements

- `ILoggingConnector`

## Constructors

### constructor

• **new EntityStorageLoggingConnector**(`dependencies`, `config?`): [`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

Create a new instance of MemoryLoggingConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The dependencies for the logging connector. |
| `dependencies.logEntryStorage` | `IEntityStorageConnector`\<[`IEntityLogEntry`](../interfaces/IEntityLogEntry.md)\> | The entity storage connector dependency. |
| `config?` | `ILoggingLevelsConfig` | The configuration for the logging connector. |

#### Returns

[`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

## Properties

### \_levels

• `Private` `Readonly` **\_levels**: `LogLevel`[]

The log levels to capture, will default to all.

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

ILoggingConnector.log

___

### query

▸ **query**(`requestContext`, `conditions?`, `sortProperties?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`ILogEntry`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Query the log entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `conditions?` | `EntityCondition`\<`ILogEntry`\> | The conditions to match for the entities. |
| `sortProperties?` | \{ `property`: keyof `ILogEntry` ; `sortDirection`: `SortDirection`  }[] | The optional sort order. |
| `properties?` | keyof `ILogEntry`[] | The optional keys to return, defaults to all. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<`ILogEntry`\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

**`Throws`**

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

ILoggingConnector.query
