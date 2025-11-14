# Function: initialiseVerifiableStorageConnector()

> **initialiseVerifiableStorageConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IVerifiableStorageConnector`\>; `component?`: `IComponent`; \}\>

Initialise the verifiable storage connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`VerifiableStorageConnectorConfig`](../type-aliases/VerifiableStorageConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IVerifiableStorageConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
