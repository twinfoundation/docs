# Function: initialiseFaucetConnector()

> **initialiseFaucetConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IFaucetConnector`\>; `component?`: `IComponent`; \}\>

Initialise a faucet connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`FaucetConnectorConfig`](../type-aliases/FaucetConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IFaucetConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
