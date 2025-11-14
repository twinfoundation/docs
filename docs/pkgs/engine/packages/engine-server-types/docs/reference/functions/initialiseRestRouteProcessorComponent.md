# Function: initialiseRestRouteProcessorComponent()

> **initialiseRestRouteProcessorComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IRestRouteProcessor`\>; `component?`: `IComponent`; \}\>

Initialise the rest route processor.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The context for the engine.

### instanceConfig

[`RestRouteProcessorConfig`](../type-aliases/RestRouteProcessorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IRestRouteProcessor`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
