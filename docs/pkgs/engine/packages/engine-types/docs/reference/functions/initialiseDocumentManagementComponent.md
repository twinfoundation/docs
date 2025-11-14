# Function: initialiseDocumentManagementComponent()

> **initialiseDocumentManagementComponent**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

Initialise the document management component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`DocumentManagementComponentConfig`](../type-aliases/DocumentManagementComponentConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IComponent`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
