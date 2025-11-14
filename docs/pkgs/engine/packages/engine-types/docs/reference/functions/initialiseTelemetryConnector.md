# Function: initialiseTelemetryConnector()

> **initialiseTelemetryConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ITelemetryConnector`\>; `component?`: `IComponent`; \}\>

Initialise a telemetry connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`TelemetryConnectorConfig`](../type-aliases/TelemetryConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ITelemetryConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
