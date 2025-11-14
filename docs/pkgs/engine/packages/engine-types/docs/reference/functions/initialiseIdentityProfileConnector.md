# Function: initialiseIdentityProfileConnector()

> **initialiseIdentityProfileConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityProfileConnector`\<`IJsonLdDocument`, `IJsonLdDocument`\>\>; `component?`: `IComponent`; \}\>

Initialise the identity profile connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`IdentityProfileConnectorConfig`](../type-aliases/IdentityProfileConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IIdentityProfileConnector`\<`IJsonLdDocument`, `IJsonLdDocument`\>\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
