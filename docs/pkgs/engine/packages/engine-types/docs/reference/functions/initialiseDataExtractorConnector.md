# Function: initialiseDataExtractorConnector()

> **initialiseDataExtractorConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IDataExtractorConnector`\>; `component?`: `IComponent`; \}\>

Initialise the data extractor connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`DataExtractorConnectorConfig`](../type-aliases/DataExtractorConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IDataExtractorConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
