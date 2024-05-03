# Class: ConsoleLoggingProvider

Class for performing logging operations in the console.

## Implements

- `ILoggingProvider`

## Constructors

### constructor

• **new ConsoleLoggingProvider**(`config?`): [`ConsoleLoggingProvider`](ConsoleLoggingProvider.md)

Create a new instance of ConsoleLoggingProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `ILoggingLevelsConfig` | The configuration for the logging provider. |

#### Returns

[`ConsoleLoggingProvider`](ConsoleLoggingProvider.md)

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

▸ **log**(`requestContext`, `logEntry`): `void`

Log an entry to the provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | `ILogEntry` | The entry to log. |

#### Returns

`void`

#### Implementation of

ILoggingProvider.log

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
