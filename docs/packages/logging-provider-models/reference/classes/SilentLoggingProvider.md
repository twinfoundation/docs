# Class: SilentLoggingProvider

Class for performing logging operations to nowhere.

## Implements

- [`ILoggingProvider`](../interfaces/ILoggingProvider.md)

## Constructors

### constructor

• **new SilentLoggingProvider**(): [`SilentLoggingProvider`](SilentLoggingProvider.md)

#### Returns

[`SilentLoggingProvider`](SilentLoggingProvider.md)

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
