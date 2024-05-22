# @gtsc/logging-models

## Classes

- [MultiLoggingConnector](classes/MultiLoggingConnector.md)
- [SilentLoggingConnector](classes/SilentLoggingConnector.md)

## Interfaces

- [ILogEntry](interfaces/ILogEntry.md)
- [ILogging](interfaces/ILogging.md)
- [ILoggingConnector](interfaces/ILoggingConnector.md)
- [ILoggingCreateRequest](interfaces/ILoggingCreateRequest.md)
- [ILoggingLevelsConfig](interfaces/ILoggingLevelsConfig.md)
- [ILoggingListRequest](interfaces/ILoggingListRequest.md)
- [ILoggingListResponse](interfaces/ILoggingListResponse.md)

## Type Aliases

### LogLevel

Ƭ **LogLevel**: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"trace"`` \| ``"debug"``

Log level.

## Variables

### LoggingConnectorFactory

• `Const` **LoggingConnectorFactory**: `Factory`\<[`ILoggingConnector`](interfaces/ILoggingConnector.md)\>

Factory for creating logging connectors.
