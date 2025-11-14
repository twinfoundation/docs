# Function: initialiseAttestationComponent()

> **initialiseAttestationComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

Initialise the attestation component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`AttestationComponentConfig`](../type-aliases/AttestationComponentConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
