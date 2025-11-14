# Function: initialiseIdentityConnector()

> **initialiseIdentityConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityConnector`\>; `component?`: `IComponent`; \}\>

Initialise the identity connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`IdentityConnectorConfig`](../type-aliases/IdentityConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
