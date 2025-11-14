# Function: initialiseAttestationConnector()

> **initialiseAttestationConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IAttestationConnector`\>; `component?`: `IComponent`; \}\>

Initialise the attestation connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`AttestationConnectorConfig`](../type-aliases/AttestationConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IAttestationConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
