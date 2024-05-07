# Class: ConsoleLoggingConnector

Class for performing logging operations in the console.

## Implements

- `ILoggingConnector`

## Constructors

### constructor

• **new ConsoleLoggingConnector**(`config?`): [`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

Create a new instance of ConsoleLoggingConnector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `ILoggingLevelsConfig` | The configuration for the logging connector. |

#### Returns

[`ConsoleLoggingConnector`](ConsoleLoggingConnector.md)

## Properties

### \_lastGroup

• `Private` `Optional` **\_lastGroup**: `string`

The last group identity.

___

### \_levels

• `Private` `Readonly` **\_levels**: `LogLevel`[]

The log levels to display, will default to all.

## Methods

### handleGroup

▸ **handleGroup**(`group`): `void`

Handle a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | `string` | The group. |

#### Returns

`void`

___

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

___

### stringToColor

▸ **stringToColor**(`str`): `string`

Convert a string to a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert. |

#### Returns

`string`

The color.
