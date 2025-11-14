# Function: initialiseBackgroundTaskConnector()

> **initialiseBackgroundTaskConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IBackgroundTaskConnector`\>; `component?`: `IComponent`; \}\>

Initialise a background task connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`BackgroundTaskConnectorConfig`](../type-aliases/BackgroundTaskConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IBackgroundTaskConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
