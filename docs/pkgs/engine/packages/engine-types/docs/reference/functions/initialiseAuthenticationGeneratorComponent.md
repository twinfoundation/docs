# Function: initialiseAuthenticationGeneratorComponent()

> **initialiseAuthenticationGeneratorComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IAuthenticationGenerator`\>; `component?`: `IComponent`; \}\>

Initialise the authentication generator component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`AuthenticationGeneratorComponentConfig`](../type-aliases/AuthenticationGeneratorComponentConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IAuthenticationGenerator`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
