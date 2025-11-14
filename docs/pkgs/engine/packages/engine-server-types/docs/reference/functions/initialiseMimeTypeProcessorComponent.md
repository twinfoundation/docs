# Function: initialiseMimeTypeProcessorComponent()

> **initialiseMimeTypeProcessorComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMimeTypeProcessor`\>; `component?`: `IComponent`; \}\>

Initialise the mime type processor.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineServerConfig`](../interfaces/IEngineServerConfig.md)\>

The context for the engine.

### instanceConfig

[`MimeTypeProcessorConfig`](../type-aliases/MimeTypeProcessorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMimeTypeProcessor`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
