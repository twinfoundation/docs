# Function: initialiseWalletConnector()

> **initialiseWalletConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IWalletConnector`\>; `component?`: `IComponent`; \}\>

Initialise a wallet connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the node.

### instanceConfig

[`WalletConnectorConfig`](../type-aliases/WalletConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IWalletConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
