# Function: initialiseMessagingEmailConnector()

> **initialiseMessagingEmailConnector**(`engineCore`, `context`, `instanceConfig`): `Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingEmailConnector`\>; `component?`: `IComponent`; \}\>

Initialise a messaging email connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`MessagingEmailConnectorConfig`](../type-aliases/MessagingEmailConnectorConfig.md)

The instance config.

## Returns

`Promise`\<\{ `instanceType?`: `string`; `factory?`: `Factory`\<`IMessagingEmailConnector`\>; `component?`: `IComponent`; \}\>

The instance created and the factory for it.
