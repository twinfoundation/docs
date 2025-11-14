# Function: initialiseIdentityResolverConnector()

> **initialiseIdentityResolverConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityResolverConnector`\>; `component?`: `IComponent`; \}\>

Initialise the identity resolver connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`IdentityResolverConnectorConfig`](../type-aliases/IdentityResolverConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityResolverConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
