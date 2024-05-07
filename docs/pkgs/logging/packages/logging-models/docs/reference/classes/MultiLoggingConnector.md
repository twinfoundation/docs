# Class: MultiLoggingConnector

Class for performing logging operations on multiple connectors.

## Implements

- [`ILoggingConnector`](../interfaces/ILoggingConnector.md)

## Constructors

### constructor

• **new MultiLoggingConnector**(`dependencies`, `config?`): [`MultiLoggingConnector`](MultiLoggingConnector.md)

Create a new instance of MultiLoggingConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | `Object` | The dependencies for the logging connector. |
| `dependencies.loggingConnectors` | [`ILoggingConnector`](../interfaces/ILoggingConnector.md)[] | The logging connectors to aggregate. |
| `config?` | [`ILoggingLevelsConfig`](../interfaces/ILoggingLevelsConfig.md) | The configuration for the logging connector. |

#### Returns

[`MultiLoggingConnector`](MultiLoggingConnector.md)

## Properties

### \_levels

• `Private` `Readonly` **\_levels**: [`LogLevel`](../modules.md#loglevel)[]

The log levels to display, will default to all.

___

### \_loggingConnectors

• `Private` `Readonly` **\_loggingConnectors**: [`ILoggingConnector`](../interfaces/ILoggingConnector.md)[]

The connectors to send the log entries to.

## Methods

### log

▸ **log**(`requestContext`, `logEntry`): `Promise`\<`undefined` \| `string`\>

Log an entry to the connector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | [`ILogEntry`](../interfaces/ILogEntry.md) | The entry to log. |

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier if one was allocated during the logging process.

#### Implementation of

[ILoggingConnector](../interfaces/ILoggingConnector.md).[log](../interfaces/ILoggingConnector.md#log)

___

### query

▸ **query**(`requestContext`, `conditions?`, `sortProperties?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Query the log entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `conditions?` | `EntityCondition`\<[`ILogEntry`](../interfaces/ILogEntry.md)\> | The conditions to match for the entities. |
| `sortProperties?` | \{ `property`: keyof [`ILogEntry`](../interfaces/ILogEntry.md) ; `sortDirection`: `SortDirection`  }[] | The optional sort order. |
| `properties?` | keyof [`ILogEntry`](../interfaces/ILogEntry.md)[] | The optional keys to return, defaults to all. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `Partial`\<[`ILogEntry`](../interfaces/ILogEntry.md)\>[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

**`Throws`**

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

[ILoggingConnector](../interfaces/ILoggingConnector.md).[query](../interfaces/ILoggingConnector.md#query)
