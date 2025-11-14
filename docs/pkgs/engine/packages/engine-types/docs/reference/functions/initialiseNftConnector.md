# Function: initialiseNftConnector()

> **initialiseNftConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`INftConnector`\>; `component?`: `IComponent`; \}\>

Initialise the NFT connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`NftConnectorConfig`](../type-aliases/NftConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`INftConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
