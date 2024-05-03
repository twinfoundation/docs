# Class: AggregatedLoggingProvider

Class for performing logging operations on multiple providers.

## Implements

- [`ILoggingProvider`](../interfaces/ILoggingProvider.md)

## Constructors

### constructor

• **new AggregatedLoggingProvider**(`config`, `loggingProviders`): [`AggregatedLoggingProvider`](AggregatedLoggingProvider.md)

Create a new instance of AggregatedLoggingProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `undefined` \| [`ILoggingLevelsConfig`](../interfaces/ILoggingLevelsConfig.md) | The configuration for the logging provider. |
| `loggingProviders` | [`ILoggingProvider`](../interfaces/ILoggingProvider.md)[] | The logging providers to aggregate. |

#### Returns

[`AggregatedLoggingProvider`](AggregatedLoggingProvider.md)

## Properties

### \_levels

• `Private` `Readonly` **\_levels**: [`LogLevel`](../modules.md#loglevel)[]

The log levels to display, will default to all.

___

### \_loggingProviders

• `Private` `Readonly` **\_loggingProviders**: [`ILoggingProvider`](../interfaces/ILoggingProvider.md)[]

The log levels to display, will default to all.

## Methods

### log

▸ **log**(`requestContext`, `logEntry`): `void`

Log an entry to the provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | [`ILogEntry`](../interfaces/ILogEntry.md) | The entry to log. |

#### Returns

`void`

#### Implementation of

[ILoggingProvider](../interfaces/ILoggingProvider.md).[log](../interfaces/ILoggingProvider.md#log)
