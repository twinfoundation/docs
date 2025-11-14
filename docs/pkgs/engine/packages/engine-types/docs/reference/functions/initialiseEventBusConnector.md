# Function: initialiseEventBusConnector()

> **initialiseEventBusConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IEventBusConnector`\>; `component?`: `IComponent`; \}\>

Initialise a event bus connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`EventBusConnectorConfig`](../type-aliases/EventBusConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IEventBusConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
