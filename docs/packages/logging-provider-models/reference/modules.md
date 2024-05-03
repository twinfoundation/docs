# @gtsc/logging-provider-models

## Classes

- [AggregatedLoggingProvider](classes/AggregatedLoggingProvider.md)
- [SilentLoggingProvider](classes/SilentLoggingProvider.md)

## Interfaces

- [ILogEntry](interfaces/ILogEntry.md)
- [ILoggingLevelsConfig](interfaces/ILoggingLevelsConfig.md)
- [ILoggingProvider](interfaces/ILoggingProvider.md)

## Type Aliases

### LogLevel

Ƭ **LogLevel**: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"trace"`` \| ``"debug"``

Log level.

## Variables

### LoggingProviderFactory

• `Const` **LoggingProviderFactory**: `Factory`\<[`ILoggingProvider`](interfaces/ILoggingProvider.md)\>

Factory for creating logging providers.
