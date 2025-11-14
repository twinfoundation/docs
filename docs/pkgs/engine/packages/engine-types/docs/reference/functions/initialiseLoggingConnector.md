# Function: initialiseLoggingConnector()

> **initialiseLoggingConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ILoggingConnector`\>; `component?`: `IComponent`; \}\>

Initialise the logging connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core context.

### instanceConfig

[`LoggingConnectorConfig`](../type-aliases/LoggingConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ILoggingConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
