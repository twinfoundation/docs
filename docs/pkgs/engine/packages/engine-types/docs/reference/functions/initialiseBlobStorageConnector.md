# Function: initialiseBlobStorageConnector()

> **initialiseBlobStorageConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IBlobStorageConnector`\>; `component?`: `IComponent`; \}\>

Initialise the blob storage connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`BlobStorageConnectorConfig`](../type-aliases/BlobStorageConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IBlobStorageConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
