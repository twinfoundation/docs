# Function: initialiseDataConverterConnector()

> **initialiseDataConverterConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IDataConverterConnector`\>; `component?`: `IComponent`; \}\>

Initialise the data converter connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`DataConverterConnectorConfig`](../type-aliases/DataConverterConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IDataConverterConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
