# Function: initialiseIdentityProfileComponent()

> **initialiseIdentityProfileComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

Initialise the identity profile component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`IdentityProfileComponentConfig`](../type-aliases/IdentityProfileComponentConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
