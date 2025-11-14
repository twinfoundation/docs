# Function: initialiseVaultConnector()

> **initialiseVaultConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IVaultConnector`\>; `component?`: `IComponent`; \}\>

Initialise the vault connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`VaultConnectorConfig`](../type-aliases/VaultConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IVaultConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
