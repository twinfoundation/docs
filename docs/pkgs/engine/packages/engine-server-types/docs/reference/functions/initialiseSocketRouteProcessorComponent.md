# Function: initialiseSocketRouteProcessorComponent()

> **initialiseSocketRouteProcessorComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ISocketRouteProcessor`\>; `component?`: `IComponent`; \}\>

Initialise the socket route processor.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The context for the engine.

### instanceConfig

[`SocketRouteProcessorConfig`](../type-aliases/SocketRouteProcessorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`ISocketRouteProcessor`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
